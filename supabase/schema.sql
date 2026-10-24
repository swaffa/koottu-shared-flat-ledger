-- Run once in the Supabase SQL editor. No service-role key is used by Koottu.
create extension if not exists pgcrypto with schema extensions;
create table if not exists public.koottu_groups (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id),
 name text not null check(length(name) between 1 and 70), location text not null default '',
 snapshot jsonb not null, revision integer not null default 1, updated_at timestamptz not null default now()
);
create table if not exists public.koottu_members (
 group_id uuid references public.koottu_groups(id) on delete cascade,
 user_id uuid references auth.users(id), joined_at timestamptz not null default now(), primary key(group_id,user_id)
);
create table if not exists public.koottu_invites (
 token_hash text primary key, group_id uuid not null references public.koottu_groups(id) on delete cascade,
 expires_at timestamptz not null default now()+interval '7 days'
);
alter table public.koottu_groups enable row level security;
alter table public.koottu_members enable row level security;
alter table public.koottu_invites enable row level security;
create or replace function public.koottu_is_member(g uuid) returns boolean language sql stable security definer set search_path='' as $$
 select exists(select 1 from public.koottu_members where group_id=g and user_id=auth.uid());
$$;
create policy koottu_group_read on public.koottu_groups for select to authenticated using(public.koottu_is_member(id));
create policy koottu_member_read on public.koottu_members for select to authenticated using(public.koottu_is_member(group_id));
grant select on public.koottu_groups,public.koottu_members to authenticated;
revoke all on public.koottu_invites from anon,authenticated;
revoke insert,update,delete on public.koottu_groups,public.koottu_members from anon,authenticated;

create or replace function public.koottu_person() returns jsonb language sql stable security definer set search_path='' as $$
 select jsonb_build_object('id',id::text,'name',left(coalesce(nullif(raw_user_meta_data->>'display_name',''),split_part(email,'@',1),'Roommate'),60),'unit','','members',jsonb_build_array(coalesce(raw_user_meta_data->>'display_name','Roommate')),'active',true,'joinedAt',current_date::text,'color','avatar-lime') from auth.users where id=auth.uid();
$$;
create or replace function public.koottu_create_group(group_name text,group_location text default '') returns jsonb language plpgsql security definer set search_path='' as $$
 declare g public.koottu_groups;
 begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if length(trim(group_name)) not between 1 and 70 then raise exception 'Enter a group name'; end if;
 if (select count(*) from public.koottu_members where user_id=auth.uid()) >= 25 then raise exception 'Group limit reached'; end if;
 insert into public.koottu_groups(owner_id,name,location,snapshot) values(auth.uid(),trim(group_name),left(group_location,80),jsonb_build_object('building',jsonb_build_object('name',trim(group_name),'location',left(group_location,80)),'households',jsonb_build_array(public.koottu_person()),'expenses','[]'::jsonb,'settlements','[]'::jsonb)) returning * into g;
 insert into public.koottu_members values(g.id,auth.uid(),now());
 return jsonb_build_object('id',g.id,'revision',g.revision,'snapshot',g.snapshot,'currentHouseholdId',auth.uid());
 end;
$$;
create or replace function public.koottu_create_invite(target_group uuid) returns jsonb language plpgsql security definer set search_path='' as $$
 declare t text;
 begin
 if not exists(select 1 from public.koottu_groups where id=target_group and owner_id=auth.uid()) then raise exception 'Only the group creator can generate invitations'; end if;
 t=encode(extensions.gen_random_bytes(32),'hex');
 delete from public.koottu_invites where group_id=target_group;
 insert into public.koottu_invites(token_hash,group_id) values(encode(extensions.digest(t,'sha256'),'hex'),target_group);
 return jsonb_build_object('token',t,'expiresInDays',7);
 end;
$$;
create or replace function public.koottu_join_group(invite_token text) returns jsonb language plpgsql security definer set search_path='' as $$
 declare g public.koottu_groups; gid uuid;
 begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 select group_id into gid from public.koottu_invites where token_hash=encode(extensions.digest(invite_token,'sha256'),'hex') and expires_at>now();
 if gid is null then raise exception 'This invitation is invalid or expired'; end if;
 select * into g from public.koottu_groups where id=gid for update;
 if not exists(select 1 from public.koottu_members where group_id=gid and user_id=auth.uid()) then
 if jsonb_array_length(g.snapshot->'households')>=100 then raise exception 'This group is full'; end if;
 insert into public.koottu_members values(gid,auth.uid(),now());
 if exists(select 1 from jsonb_array_elements(g.snapshot->'households') x where x->>'id'=auth.uid()::text) then
 update public.koottu_groups set snapshot=jsonb_set(snapshot,'{households}',(select jsonb_agg(case when x->>'id'=auth.uid()::text then x||jsonb_build_object('active',true) else x end) from jsonb_array_elements(g.snapshot->'households') x)),revision=revision+1,updated_at=now() where id=gid returning * into g;
 else
 update public.koottu_groups set snapshot=jsonb_set(snapshot,'{households}',(snapshot->'households')||jsonb_build_array(public.koottu_person())),revision=revision+1,updated_at=now() where id=gid returning * into g;
 end if;
 end if;
 return jsonb_build_object('id',g.id,'revision',g.revision,'snapshot',g.snapshot,'currentHouseholdId',auth.uid());
 end;
$$;
create or replace function public.koottu_save_group(target_group uuid,expected_revision integer,new_snapshot jsonb) returns jsonb language plpgsql security definer set search_path='' as $$
 declare g public.koottu_groups; e jsonb; p jsonb; v jsonb; count_ids integer; total_ids integer; total numeric; n numeric; ids text[];
 begin
 if not public.koottu_is_member(target_group) then raise exception 'Not a member of this group'; end if;
 select * into g from public.koottu_groups where id=target_group for update;
 if g.revision<>expected_revision then raise exception 'LEDGER_CONFLICT'; end if;
 if jsonb_typeof(new_snapshot->'households') is distinct from 'array' or jsonb_typeof(new_snapshot->'expenses') is distinct from 'array' or jsonb_typeof(new_snapshot->'settlements') is distinct from 'array' or jsonb_array_length(new_snapshot->'households')>100 or jsonb_array_length(new_snapshot->'expenses')>10000 or octet_length(new_snapshot::text)>3000000 then raise exception 'Invalid ledger'; end if;
 if g.owner_id<>auth.uid() and new_snapshot->'households'<>g.snapshot->'households' then raise exception 'Only the group creator can manage the roommate list'; end if;
 -- Existing expense and repayment history is append-only for all members.
 if exists(select 1 from jsonb_array_elements(g.snapshot->'expenses') old where not (new_snapshot->'expenses') @> jsonb_build_array(old)) or exists(select 1 from jsonb_array_elements(g.snapshot->'settlements') old where not (new_snapshot->'settlements') @> jsonb_build_array(old)) then raise exception 'Existing ledger history cannot be changed'; end if;
 -- Signed-in members always keep an associated roommate record.
 if exists(select 1 from public.koottu_members m where m.group_id=target_group and not exists(select 1 from jsonb_array_elements(new_snapshot->'households') x where x->>'id'=m.user_id::text and coalesce((x->>'active')::boolean,true))) then raise exception 'Account members cannot be removed through the manual roommate list'; end if;
 select array_agg(x->>'id'),count(*),count(distinct x->>'id') into ids,total_ids,count_ids from jsonb_array_elements(new_snapshot->'households') x;
 if total_ids<>count_ids then raise exception 'Duplicate roommate'; end if;
 for p in select * from jsonb_array_elements(new_snapshot->'households') loop
 if length(p->>'name') not between 1 and 60 or coalesce(p->>'id','')='' then raise exception 'Invalid roommate'; end if;
 end loop;
 for e in select * from jsonb_array_elements(new_snapshot->'expenses') loop
 total=(e->>'amount')::numeric;
 if total<=0 or total<>trunc(total) or total>100000000 or coalesce(e->>'id','')='' or coalesce(e->>'title','')='' then raise exception 'Invalid expense'; end if;
 for v in select value from jsonb_each(jsonb_build_object('contributions',coalesce(e->'contributions',jsonb_build_object(e->>'payerId',total)),'shares',e->'shares')) loop
 if jsonb_typeof(v)<>'object' then raise exception 'Invalid split'; end if;
 n=0;
 for p in select jsonb_build_object('id',key,'amount',value) from jsonb_each(v) loop
 if not (p->>'id'=any(ids)) or (p->>'amount')::numeric<0 or (p->>'amount')::numeric<>trunc((p->>'amount')::numeric) then raise exception 'Invalid share'; end if;
 n=n+(p->>'amount')::numeric;
 end loop;
 if n<>total then raise exception 'Shares and contributions must match the total'; end if;
 end loop;
 end loop;
 if (select count(*)<>count(distinct x->>'id') from jsonb_array_elements(new_snapshot->'expenses') x) then raise exception 'Duplicate expense'; end if;
 if (select count(*)<>count(distinct x->>'id') from jsonb_array_elements(new_snapshot->'settlements') x) then raise exception 'Duplicate repayment'; end if;
 for e in select * from jsonb_array_elements(new_snapshot->'settlements') loop
 if not (e->>'from'=any(ids)) or not (e->>'to'=any(ids)) or e->>'from'=e->>'to' or (e->>'amount')::numeric<=0 or (e->>'amount')::numeric<>trunc((e->>'amount')::numeric) or (e->>'paid')::boolean is distinct from true then raise exception 'Invalid repayment'; end if;
 end loop;
 update public.koottu_groups set snapshot=new_snapshot-'currentHouseholdId'-'inviteCode',revision=revision+1,updated_at=now() where id=target_group returning * into g;
 return jsonb_build_object('id',g.id,'revision',g.revision,'snapshot',g.snapshot,'currentHouseholdId',auth.uid());
 end;
$$;
revoke all on function public.koottu_is_member(uuid),public.koottu_person(),public.koottu_create_group(text,text),public.koottu_create_invite(uuid),public.koottu_join_group(text),public.koottu_save_group(uuid,integer,jsonb) from public,anon;
grant execute on function public.koottu_is_member(uuid),public.koottu_create_group(text,text),public.koottu_create_invite(uuid),public.koottu_join_group(text),public.koottu_save_group(uuid,integer,jsonb) to authenticated;

-- Owners may revoke access while retaining every historical expense/share.
create or replace function public.koottu_remove_member(target_group uuid,target_member text) returns jsonb language plpgsql security definer set search_path='' as $$
 declare g public.koottu_groups; people jsonb;
 begin
 select * into g from public.koottu_groups where id=target_group for update;
 if g.owner_id is distinct from auth.uid() then raise exception 'Only the group creator can remove members'; end if;
 if target_member=auth.uid()::text then raise exception 'The group creator cannot remove themselves'; end if;
 if not exists(select 1 from jsonb_array_elements(g.snapshot->'households') x where x->>'id'=target_member) then raise exception 'Roommate not found'; end if;
 delete from public.koottu_members where group_id=target_group and user_id::text=target_member;
 delete from public.koottu_invites where group_id=target_group;
 select jsonb_agg(case when x->>'id'=target_member then x||jsonb_build_object('active',false,'leftAt',current_date::text) else x end) into people from jsonb_array_elements(g.snapshot->'households') x;
 update public.koottu_groups set snapshot=jsonb_set(snapshot,'{households}',people),revision=revision+1,updated_at=now() where id=target_group returning * into g;
 return jsonb_build_object('id',g.id,'revision',g.revision,'snapshot',g.snapshot,'currentHouseholdId',auth.uid());
 end;
$$;
revoke all on function public.koottu_remove_member(uuid,text) from public,anon;
grant execute on function public.koottu_remove_member(uuid,text) to authenticated;

-- Persistent limits apply across Vercel instances. Provider quotas still apply.
create table if not exists public.koottu_ai_usage(user_id uuid references auth.users(id), usage_day date, minute_start timestamptz, minute_count integer not null default 0, day_count integer not null default 0, primary key(user_id,usage_day));
alter table public.koottu_ai_usage enable row level security;
revoke all on public.koottu_ai_usage from anon,authenticated;
create or replace function public.koottu_take_ai_slot() returns boolean language plpgsql security definer set search_path='' as $$
 declare n integer; stamp timestamptz=date_trunc('minute',now());
 begin
 if auth.uid() is null then return false; end if;
 insert into public.koottu_ai_usage values(auth.uid(),current_date,stamp,1,1) on conflict(user_id,usage_day) do update set minute_start=stamp,minute_count=case when public.koottu_ai_usage.minute_start=stamp then public.koottu_ai_usage.minute_count+1 else 1 end,day_count=public.koottu_ai_usage.day_count+1 where public.koottu_ai_usage.day_count<300 and (public.koottu_ai_usage.minute_start<>stamp or public.koottu_ai_usage.minute_count<20) returning day_count into n;
 return n is not null;
 end;
$$;
revoke all on function public.koottu_take_ai_slot() from public,anon;
grant execute on function public.koottu_take_ai_slot() to authenticated;
