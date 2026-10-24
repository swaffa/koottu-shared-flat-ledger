const base = process.env.SUPABASE_URL?.replace(/\/$/, '');
const key = process.env.SUPABASE_ANON_KEY;
export const accountsEnabled = Boolean(base && key);
const fail = (message, status = 400) => Object.assign(new Error(message), { status });
async function supabase(route, { method = 'GET', token, body } = {}) {
  if (!accountsEnabled) throw fail('Shared accounts are not configured yet. The private browser ledger is available.', 503);
  const response = await fetch(`${base}${route}`, {
    method, headers: { apikey: key, Authorization: `Bearer ${token || key}`, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(15000)
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const conflict = data?.message?.includes('LEDGER_CONFLICT');
    throw fail(conflict ? 'Your roommate just updated this group. The latest ledger has been loaded; please try your change again.' : data?.msg || data?.message || data?.error_description || 'Account request failed.', conflict ? 409 : response.status === 401 || response.status === 403 ? response.status : 400);
  }
  return data;
}
export async function requireAccount(request) {
  const token = String(request.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token || token.length > 8192) throw fail('Please sign in to continue.', 401);
  const user = await supabase('/auth/v1/user', { token });
  return { user, token };
}
export function validateLedger(state) {
  if (!state || !Array.isArray(state.households) || !Array.isArray(state.expenses) || !Array.isArray(state.settlements)) throw fail('Invalid ledger.');
  if (state.households.length > 100 || state.expenses.length > 10000 || state.settlements.length > 10000) throw fail('This group has reached its ledger size limit.');
  if (state.building && (typeof state.building.name !== 'string' || !state.building.name.trim() || state.building.name.length > 70 || typeof state.building.location !== 'string' || state.building.location.length > 80)) throw fail('Check the group name and location.');
  const ids = new Set();
  for (const person of state.households) {
    if (typeof person.id !== 'string' || !person.id || ids.has(person.id) || typeof person.name !== 'string' || !person.name.trim() || person.name.length > 60) throw fail('Invalid roommate details.');
    ids.add(person.id);
  }
  const validAmount = n => Number.isSafeInteger(n) && n >= 0 && n <= 100000000;
  const seen = new Set();
  for (const expense of state.expenses) {
    if (typeof expense.id !== 'string' || seen.has(expense.id) || typeof expense.title !== 'string' || !expense.title.trim() || expense.title.length > 100 || !validAmount(expense.amount) || !expense.amount || !/^\d{4}-\d{2}-\d{2}$/.test(expense.date)) throw fail('Invalid expense details.');
    seen.add(expense.id);
    const contributions = expense.contributions || { [expense.payerId]: expense.amount };
    for (const amounts of [contributions, expense.shares]) {
      if (!amounts || Array.isArray(amounts) || typeof amounts !== 'object' || !Object.keys(amounts).length || Object.entries(amounts).some(([id,n]) => !ids.has(id) || !validAmount(n)) || Object.values(amounts).reduce((a,b) => a+b,0) !== expense.amount) throw fail('Payer contributions and shares must each match the total.');
    }
  }
  const settlements = new Set();
  for (const item of state.settlements) {
    if (!item.id || settlements.has(item.id) || !ids.has(item.from) || !ids.has(item.to) || item.from === item.to || !validAmount(item.amount) || !item.amount || item.paid !== true) throw fail('Invalid repayment.');
    settlements.add(item.id);
  }
  return state;
}
export async function accountRoute(request, pathname, payload = {}) {
  if (pathname === '/api/account/config') return { enabled: accountsEnabled };
  const action = pathname.split('/').pop();
  if (['signup','login'].includes(action)) {
    const email = String(payload.email || '').trim(); const password = String(payload.password || '');
    if (!/^\S+@\S+\.\S+$/.test(email) || password.length < 8 || password.length > 128) throw fail('Use a valid email and a password of at least 8 characters.');
    if (action === 'signup') return supabase('/auth/v1/signup', {method:'POST', body:{email,password,data:{display_name:String(payload.name || '').trim().slice(0,60)}}});
    return supabase('/auth/v1/token?grant_type=password', {method:'POST', body:{email,password}});
  }
  if (action === 'recover') {
    const email=String(payload.email||'').trim();
    if(!/^\S+@\S+\.\S+$/.test(email)) throw fail('Enter your account email.');
    await supabase('/auth/v1/recover',{method:'POST',body:{email}});
    return {message:'If this email has an account, a password reset link is on its way.'};
  }
  if (action === 'refresh') {
    if (typeof payload.refresh_token !== 'string' || payload.refresh_token.length > 8192) throw fail('Please sign in again.',401);
    return supabase('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:payload.refresh_token}});
  }
  const {token,user} = await requireAccount(request);
  if (['notifications','verify-phone','confirm-phone','notification-consent'].includes(action)) { const {notificationAccount}=await import('./reminders.mjs'); return notificationAccount(action,payload,{user,token}); }
  const rpc = (name, body) => supabase(`/rest/v1/rpc/${name}`,{method:'POST',token,body});
  if (action === 'password') {
    const password=String(payload.password||'');
    if(password.length<8||password.length>128) throw fail('Use at least 8 characters.');
    await supabase('/auth/v1/user',{method:'PUT',token,body:{password}});return {ok:true};
  }
  if (action === 'logout') { await supabase('/auth/v1/logout',{method:'POST',token}); return {ok:true}; }
  if (action === 'groups') return {user:{id:user.id,email:user.email,name:user.user_metadata?.display_name || user.email.split('@')[0]},groups:await supabase('/rest/v1/koottu_groups?select=id,name,location,revision,updated_at&order=updated_at.desc',{token})};
  if (action === 'create') return rpc('koottu_create_group',{group_name:String(payload.name || '').trim().slice(0,70),group_location:String(payload.location || '').trim().slice(0,80)});
  if (action === 'join') return rpc('koottu_join_group',{invite_token:String(payload.token || '').slice(0,128)});
  if (action === 'remove') return rpc('koottu_remove_member',{target_group:payload.groupId,target_member:String(payload.memberId || '')});
  if (action === 'invite') return rpc('koottu_create_invite',{target_group:payload.groupId});
  if (action === 'load') {
    if (!/^[\da-f-]{36}$/i.test(payload.groupId || '')) throw fail('Choose a valid group.');
    const rows=await supabase(`/rest/v1/koottu_groups?id=eq.${payload.groupId}&select=id,owner_id,name,location,revision,snapshot`,{token});
    if (!rows?.[0]) throw fail('This group is unavailable or you are no longer a member.',403);
    return {...rows[0],currentHouseholdId:user.id};
  }
  if (action === 'save') {
    validateLedger(payload.state);
    return rpc('koottu_save_group',{target_group:payload.groupId,expected_revision:payload.revision,new_snapshot:payload.state});
  }
  throw fail('Account endpoint not found.',404);
}

export async function consumeAISlot(token) {
  const allowed = await supabase('/rest/v1/rpc/koottu_take_ai_slot',{method:'POST',token,body:{}});
  if (!allowed) throw fail('You have reached your AI allowance. Try again later; the manual ledger is still available.',429);
}
