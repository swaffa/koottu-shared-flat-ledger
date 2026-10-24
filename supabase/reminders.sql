-- Optional: run after schema.sql when configuring WhatsApp reminders.
create table public.koottu_notification_preferences(
 user_id uuid primary key references auth.users(id) on delete cascade, phone text not null,
 verified boolean not null default false, opt_in boolean not null default false,
 verify_window timestamptz not null default now(), verify_attempts integer not null default 0,
 consent_at timestamptz,updated_at timestamptz not null default now()
);
create table public.koottu_reminder_deliveries(
 id uuid primary key default gen_random_uuid(),user_id uuid references auth.users(id),group_id uuid references public.koottu_groups(id),
 reminder_week date not null,status text not null default 'claimed',provider_id text,created_at timestamptz not null default now(),
 unique(user_id,group_id,reminder_week)
);
alter table public.koottu_notification_preferences enable row level security;
alter table public.koottu_reminder_deliveries enable row level security;
create policy koottu_own_contact on public.koottu_notification_preferences for select to authenticated using(user_id=auth.uid());
revoke all on public.koottu_notification_preferences,public.koottu_reminder_deliveries from anon,authenticated;
grant select on public.koottu_notification_preferences to authenticated;
grant all on public.koottu_notification_preferences,public.koottu_reminder_deliveries to service_role;
create or replace function public.koottu_start_phone_verification(phone_number text) returns boolean language plpgsql security definer set search_path='' as $$
 declare n integer;
 begin
 if auth.uid() is null or phone_number !~ '^\+[1-9][0-9]{7,14}$' then raise exception 'Invalid phone'; end if;
 insert into public.koottu_notification_preferences(user_id,phone,verify_attempts) values(auth.uid(),phone_number,1)
 on conflict(user_id) do update set phone=excluded.phone,verified=false,opt_in=false,verify_attempts=case when public.koottu_notification_preferences.verify_window>now()-interval '1 hour' then public.koottu_notification_preferences.verify_attempts+1 else 1 end,verify_window=case when public.koottu_notification_preferences.verify_window>now()-interval '1 hour' then public.koottu_notification_preferences.verify_window else now() end,updated_at=now()
 where public.koottu_notification_preferences.verify_window<now()-interval '1 hour' or public.koottu_notification_preferences.verify_attempts<3 returning verify_attempts into n;
 if n is null then raise exception 'Please wait before requesting another code'; end if;
 return true;
 end;
$$;
create or replace function public.koottu_verify_phone(target_user uuid,phone_number text) returns void language sql security definer set search_path='' as $$
 update public.koottu_notification_preferences set verified=true,updated_at=now() where user_id=target_user and phone=phone_number;
$$;
create or replace function public.koottu_set_notification_consent(enabled boolean) returns void language plpgsql security definer set search_path='' as $$
 begin
 if auth.uid() is null then raise exception 'Sign in first'; end if;
 if enabled and not exists(select 1 from public.koottu_notification_preferences where user_id=auth.uid() and verified) then raise exception 'Verify your phone first'; end if;
 update public.koottu_notification_preferences set opt_in=enabled,consent_at=case when enabled then now() else consent_at end,updated_at=now() where user_id=auth.uid();
 end;
$$;
create or replace function public.koottu_claim_reminder(target_user uuid,target_group uuid) returns uuid language plpgsql security definer set search_path='' as $$
 declare job uuid;
 begin
 if not exists(select 1 from public.koottu_members where user_id=target_user and group_id=target_group) or not exists(select 1 from public.koottu_notification_preferences where user_id=target_user and opt_in and verified) then return null; end if;
 insert into public.koottu_reminder_deliveries(user_id,group_id,reminder_week) values(target_user,target_group,date_trunc('week',now())::date) on conflict do nothing returning id into job;
 return job;
 end;
$$;
revoke all on function public.koottu_start_phone_verification(text),public.koottu_verify_phone(uuid,text),public.koottu_set_notification_consent(boolean),public.koottu_claim_reminder(uuid,uuid) from public,anon,authenticated;
grant execute on function public.koottu_start_phone_verification(text),public.koottu_set_notification_consent(boolean) to authenticated;
grant execute on function public.koottu_verify_phone(uuid,text),public.koottu_claim_reminder(uuid,uuid) to service_role;
