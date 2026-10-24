(() => {
  const SESSION_KEY = 'koottu.session.v1';
  const GROUP_KEY = 'koottu.group.v1';
  let session = null, activeGroup = null, groups = [], user = null, hooks, enabled = false, saving = false, refreshPromise = null;
  let poll = null, accepted = null, mounted = false;
  const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const $ = id => document.getElementById(id);
  const gate = () => $('welcome-screen');
  const sessionStore = value => { session = value?.access_token ? {...value,expires_at: value.expires_at || Math.floor(Date.now()/1000)+(value.expires_in||3600)} : null; if(session) sessionStorage.setItem(SESSION_KEY,JSON.stringify(session)); else sessionStorage.removeItem(SESSION_KEY); };
  async function raw(action,body,token) {
    const r = await fetch(`/api/account/${action}`,{method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
    const data=await r.json(); if(!r.ok) throw Object.assign(new Error(data.error || 'Please try again.'),{status:r.status}); return data;
  }
  async function accessToken() {
    if(!session) return null;
    if(session.expires_at*1000 < Date.now()+60000) {
      if(!refreshPromise) refreshPromise=raw('refresh',{refresh_token:session.refresh_token}).then(sessionStore).catch(error=>{sessionStore(null);throw error;}).finally(()=>{refreshPromise=null;});
      await refreshPromise;
    }
    return session?.access_token;
  }
  async function api(action,body) { const token=await accessToken(); if(!token) throw new Error('Please sign in again.'); return raw(action,body,token); }
  function message(text,error=false) { const el=$('account-message'); if(el){el.textContent=text;el.classList.toggle('error',error);} }
  function showGate() { gate().hidden=false; document.querySelector('.app-shell').hidden=true; }
  function showApp() { gate().hidden=true; document.querySelector('.app-shell').hidden=false; hooks.render(); updateBadges(); }
  function updateBadges() {
    const label=document.querySelector('.local-badge [data-i18n="demoMode"]');
    if(label) label.textContent=activeGroup?(saving?'Saving…':'Shared group'):'Private on this device';
    const note=document.querySelector('.privacy-note');
    if(note) note.innerHTML=`<span class="privacy-dot"></span><span><strong>${activeGroup?'Shared with your group':'Your private ledger'}</strong><small>${activeGroup?'Signed-in group members only':'Saved in this browser · no account'}</small></span>`;
    const signout=$('account-toolbar');
    if(signout)signout.innerHTML=activeGroup?`<button type="button" class="text-button" id="sync-group">↻ Refresh</button><button type="button" class="text-button" id="notification-settings">Reminders</button><button type="button" class="text-button" id="account-menu">Account</button>`:`<button type="button" class="text-button" id="account-menu">${session?'My groups':'Sign in'}</button>`;
    $('account-menu')?.addEventListener('click',()=>session?groupPicker():authScreen('login'));
    $('notification-settings')?.addEventListener('click',notifications);
    $('sync-group')?.addEventListener('click',()=>refreshGroup(true));
    document.querySelector('.roommate-form')?.classList.toggle('member-readonly',Boolean(activeGroup&&activeGroup.owner_id!==user?.id));
  }
  function shell(inner) {
    showGate();gate().innerHTML=`<div class="welcome-visual"><a class="welcome-brand" href="/">koottu<span>.</span></a><div class="welcome-story"><span class="welcome-kicker">LIFE TOGETHER, A LITTLE EASIER</span><h1>Good company.<br>Clear accounts.</h1><p>A shared home deserves a shared view of the money. Bring your people. We’ll help with the math.</p><div class="welcome-receipt"><span>Friday dinner</span><strong>₹1,200</strong><div><span>You + 2 flatmates</span><b>₹400 each</b></div></div><p class="welcome-footnote">✳ Text it. Say it. Share it fairly.</p></div><span class="welcome-bottom">Made for flatmates, friends & PG life.</span></div><section class="welcome-form-panel">${inner}<p id="account-message" class="account-message" role="status" aria-live="polite"></p></section>`;
  }
  function authScreen(mode='signup') {
    const signup=mode==='signup';
    shell(`<span class="eyebrow">WELCOME TO YOUR NEXT CHAPTER</span><h2>${signup?'Make yourself at home.':'Welcome back.'}</h2><p class="account-intro">${signup?'One place for your people, expenses, and who-owes-whom.':'Sign in to pick up where your group left off.'}</p><div class="auth-tabs"><button type="button" data-mode="signup" class="${signup?'selected':''}">Create account</button><button type="button" data-mode="login" class="${signup?'':'selected'}">Sign in</button></div><form id="account-form">${signup?'<label class="field">Your name<input id="account-name" required maxlength="60" autocomplete="name" placeholder="What should we call you?"></label>':''}<label class="field">Email<input type="email" id="account-email" required autocomplete="email" placeholder="you@example.com"></label><label class="field">Password<input type="password" id="account-password" required minlength="8" maxlength="128" autocomplete="${signup?'new-password':'current-password'}" placeholder="At least 8 characters"></label><button class="button button-primary account-submit" ${enabled?'':'disabled'}>${signup?'Create my account':'Sign in'} <span>→</span></button></form>${!signup&&enabled?'<button type="button" class="text-button forgot-password" id="forgot-password">Forgot your password?</button>':''}${enabled?'':'<p class="account-setup-note">Shared accounts are being set up. You can use a private ledger on this device now.</p>'}<div class="account-divider"><span>or start privately</span></div><button type="button" class="button button-quiet guest-entry" id="guest-entry">Try without an account <span>↗</span></button><p class="account-privacy">Private mode stays on this device. Accounts let roommates share the same ledger.</p>`);
    gate().querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>authScreen(b.dataset.mode));
    $('guest-entry').onclick=guestScreen;
    $('forgot-password')?.addEventListener('click',async()=>{
      const email=$('account-email').value.trim();
      if(!email) return message('Enter your email above, then choose Forgot your password.',true);
      try{const result=await raw('recover',{email});message(result.message);}catch(error){message(error.message,true);}
    });
    $('account-form').onsubmit=async event=>{
      event.preventDefault(); const b=event.submitter;b.disabled=true;message(signup?'Creating your account…':'Signing in…');
      try {
        const data=await raw(signup?'signup':'login',{email:$('account-email').value,password:$('account-password').value,name:$('account-name')?.value});
        if(!data.access_token) {message('Check your email to confirm your account, then come back and sign in.');return;}
        sessionStore(data);await afterSignIn();
      }catch(error){message(error.message,true);}finally{b.disabled=!enabled;}
    };
  }
  function guestScreen() {
    shell(`<span class="eyebrow">A LITTLE SPACE OF YOUR OWN</span><h2>Start with your flat.</h2><p class="account-intro">Try Koottu privately. Your ledger will be saved in this browser.</p><form id="guest-form"><label class="field">Your name<input id="guest-name" autocomplete="given-name" required maxlength="60" placeholder="e.g. Riya"></label><label class="field">Your group<input id="guest-group" required maxlength="70" value="Our happy little flat"></label><label class="field">Location <small>(optional)</small><input id="guest-location" maxlength="80" placeholder="Your city, area, or building"></label><button class="button button-primary account-submit">Open my dashboard →</button></form><button type="button" class="text-button" id="back-signin">Back to sign in</button>`);
    $('back-signin').onclick=()=>authScreen('login');
    $('guest-form').onsubmit=event=>{
      event.preventDefault();activeGroup=null;clearInterval(poll);accepted=null;
      hooks.startGuest($('guest-name').value.trim(),$('guest-group').value.trim(),$('guest-location').value.trim());showApp();localStorage.setItem('koottu.guest.started','1');
    };
  }
  function passwordScreen(){
    shell(`<span class="eyebrow">A FRESH START</span><h2>Choose a new password.</h2><form id="new-password-form"><label class="field">New password<input id="new-password" type="password" minlength="8" maxlength="128" autocomplete="new-password" required></label><button class="button button-primary account-submit">Save password</button></form>`);
    $('new-password-form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{await api('password',{password:$('new-password').value});await afterSignIn();}catch(error){message(error.message,true);}finally{b.disabled=false;}};
  }
  async function afterSignIn() {
    const data=await api('groups');user=data.user;groups=data.groups;
    const invite=new URLSearchParams(location.search).get('invite');
    if(invite) {try{await join(invite);}catch(error){history.replaceState(null,'',location.pathname);groupPicker();message(error.message,true);}return;}
    const existing=groups.find(g=>g.id===localStorage.getItem(GROUP_KEY));
    if(existing)await loadGroup(existing.id);else groupPicker();
  }
  function groupPicker() {
    clearInterval(poll);
    shell(`<span class="eyebrow">HEY ${escape(user?.name||'ROOMMATE')}</span><h2>Where are we sharing?</h2><p class="account-intro">Keep each flat or trip in its own group.</p><div class="group-list">${groups.map(g=>`<button class="group-choice" data-group="${escape(g.id)}"><span>⌂</span><span><strong>${escape(g.name)}</strong><small>${escape(g.location||'Shared group')}</small></span><b>→</b></button>`).join('')||'<p class="empty-groups">Your first shared space starts here.</p>'}</div><form id="group-create"><label class="field">New group name<input id="group-name" required maxlength="70" placeholder="e.g. The Chai Club"></label><label class="field">Location or description <small>(optional)</small><input id="group-location" maxlength="80" placeholder="Your city, area, or building"></label><button class="button button-primary account-submit">Create a group →</button></form><details class="join-with-link"><summary>Have an invitation link?</summary><form id="join-group"><label class="field">Invitation link<input id="join-token" required placeholder="Paste your Koottu invitation"></label><button class="button button-outline-green">Join group</button></form></details><button class="text-button" type="button" id="sign-out">Sign out</button>`);
    gate().querySelectorAll('[data-group]').forEach(b=>b.onclick=()=>loadGroup(b.dataset.group).catch(e=>message(e.message,true)));
    $('group-create').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{const g=await api('create',{name:$('group-name').value,location:$('group-location').value});await afterCreate(g.id);}catch(error){message(error.message,true);}finally{b.disabled=false;}};
    $('join-group').onsubmit=async e=>{e.preventDefault();let value=$('join-token').value.trim();try{if(value.includes('://'))value=new URL(value).searchParams.get('invite');await join(value);}catch(error){message(error.message,true);}};
    $('sign-out').onclick=logout;
  }
  async function afterCreate(id) {const data=await api('groups');groups=data.groups;await loadGroup(id);}
  async function join(token){const joined=await api('join',{token});history.replaceState(null,'',location.pathname);const data=await api('groups');groups=data.groups;await loadGroup(joined.id);}
  function apply(group){
    if(activeGroup?.id!==group.id) hooks.resetChat();
    activeGroup=group;accepted=structuredClone(group.snapshot);localStorage.setItem(GROUP_KEY,group.id);
    hooks.setState({...structuredClone(group.snapshot),currentHouseholdId:group.currentHouseholdId});
  }
  async function loadGroup(id) {
    const data=await api('load',{groupId:id});apply(data);showApp();
    clearInterval(poll);poll=setInterval(()=>refreshGroup(false),15000);
  }
  async function refreshGroup(announce=false) {
    if(!activeGroup||saving||document.hidden||hooks.busy())return;
    try {const next=await api('load',{groupId:activeGroup.id});if(next.revision!==activeGroup.revision){apply(next);hooks.render();}updateBadges();if(announce)hooks.toast('Your group is up to date.');}
    catch(error){if(error.status===403){activeGroup=null;accepted=null;hooks.resetChat();hooks.restoreGuest();const data=await api('groups');groups=data.groups;groupPicker();message('You no longer have access to that group.',true);return;}const badge=document.querySelector('.local-badge [data-i18n="demoMode"]');if(badge)badge.textContent='Sync unavailable';if(announce)hooks.toast(error.message,true);}
  }
  async function save(next) {
    if(!activeGroup)return true;
    if(saving)throw new Error('A change is still saving. Please wait a moment.');
    saving=true;updateBadges();
    try {
      const result=await api('save',{groupId:activeGroup.id,revision:activeGroup.revision,state:next});
      activeGroup.revision=result.revision;accepted=structuredClone(result.snapshot);
      if(next.building){activeGroup.name=next.building.name;activeGroup.location=next.building.location;const listed=groups.find(g=>g.id===activeGroup.id);if(listed)Object.assign(listed,{name:next.building.name,location:next.building.location});}
      return true;
    }catch(error){
      if(error.status===409){const latest=await api('load',{groupId:activeGroup.id});apply(latest);}
      else if(accepted)hooks.setState({...structuredClone(accepted),currentHouseholdId:user.id});
      throw error;
    }finally{saving=false;updateBadges();}
  }
  async function removeMember(memberId) { const result=await api('remove',{groupId:activeGroup.id,memberId}); apply({...activeGroup,...result}); }
  async function invite() {if(!activeGroup)return null;const result=await api('invite',{groupId:activeGroup.id});const url=new URL(location.origin);url.searchParams.set('invite',result.token);return url.toString();}
  async function notifications(){
    document.getElementById('notification-dialog')?.remove();
    const dialog=document.createElement('dialog');dialog.id='notification-dialog';dialog.className='notification-dialog';
    dialog.innerHTML=`<div class="notification-heading"><h2>Reminder settings</h2><button type="button" class="icon-button" aria-label="Close reminder settings" id="close-notifications">×</button></div><p>Keep an eye on unsettled balances without chasing the group chat.</p><div id="notification-content">Loading your preferences…</div><p id="notification-message" class="account-message" role="status"></p>`;
    document.body.append(dialog);dialog.showModal();$('close-notifications').onclick=()=>dialog.close();
    const info=text=>{$('notification-message').textContent=text;};
    if(!session){$('notification-content').innerHTML='<p>Your dashboard already shows pending balances. Sign in to configure personal delivery preferences when messaging is available.</p>';return;}
    try{
      const data=await api('notifications',{});const pref=data.preferences;
      if(!data.configured){$('notification-content').innerHTML='<div class="account-setup-note">Automatic WhatsApp reminders are not available yet. Your dashboard will continue to show unsettled balances.</div>';return;}
      $('notification-content').innerHTML=pref?.verified?`<p>Verified number: <strong>${escape(pref.phone)}</strong></p><form id="notification-opt-in"><label class="notification-consent"><input id="whatsapp-consent" type="checkbox" ${pref.opt_in?'checked':''}> Send me a weekly WhatsApp reminder about unsettled balances in my groups. I can turn this off anytime.</label><button class="button button-primary">Save preferences</button></form>`:`<form id="verify-phone-form"><label class="field">Your phone number<input id="notification-phone" type="tel" autocomplete="tel" required placeholder="+919876543210" value="${escape(pref?.phone||'')}"></label><label class="notification-consent"><input id="verify-consent" type="checkbox" required> This is my number. Send me a verification code by SMS.</label><button class="button button-outline-green">Send verification code</button></form><form id="verify-code-form"><label class="field">Verification code<input id="notification-code" inputmode="numeric" autocomplete="one-time-code" required pattern="[0-9]{4,10}" placeholder="Enter the code"></label><button class="button button-primary">Verify number</button></form>`;
      $('notification-opt-in')?.addEventListener('submit',async e=>{e.preventDefault();try{await api('notification-consent',{optIn:$('whatsapp-consent').checked});info('Preferences saved.');}catch(error){info(error.message);}});
      $('verify-phone-form')?.addEventListener('submit',async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{const result=await api('verify-phone',{phone:$('notification-phone').value,consent:$('verify-consent').checked});info(result.message);}catch(error){info(error.message);}finally{b.disabled=false;}});
      $('verify-code-form')?.addEventListener('submit',async e=>{e.preventDefault();try{await api('confirm-phone',{code:$('notification-code').value});await notifications();}catch(error){info(error.message);}});
    }catch(error){info(error.message);}
  }
  async function logout(){
    try{await api('logout',{});}catch{}
    clearInterval(poll);sessionStore(null);activeGroup=null;user=null;accepted=null;hooks.resetChat();hooks.restoreGuest();authScreen('login');
  }
  async function mount(callbacks){hooks=callbacks;mounted=true;try{const config=await raw('config');enabled=config.enabled;session=JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null');
      const callback=new URLSearchParams(location.hash.slice(1));
      if(callback.get('access_token')&&enabled){
        sessionStore({access_token:callback.get('access_token'),refresh_token:callback.get('refresh_token'),expires_in:Number(callback.get('expires_in')||3600)});
        history.replaceState(null,'',location.pathname+location.search);
        if(callback.get('type')==='recovery'){passwordScreen();return;}
      }
      if(session&&enabled){await afterSignIn();return;}}catch{sessionStore(null);}
    if(localStorage.getItem('koottu.guest.started')&&!new URLSearchParams(location.search).has('invite'))showApp();else authScreen('signup');
  }
  window.KoottuCloud={mount,save,invite,removeMember,accessToken,notifications,updateBadges,groupPicker,profile:()=>session?groupPicker():authScreen('login'),get active(){return Boolean(activeGroup)},get enabled(){return enabled},get signedIn(){return Boolean(session)},get canManage(){return !activeGroup||activeGroup.owner_id===user?.id},get saving(){return saving},get mounted(){return mounted}};
})();
