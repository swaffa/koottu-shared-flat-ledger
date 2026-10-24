import {timingSafeEqual} from 'node:crypto';
const env=process.env;
const endpoint=env.SUPABASE_URL?.replace(/\/$/,'');
const serviceKey=env.SUPABASE_SERVICE_ROLE_KEY;
const providerReady=()=>Boolean(endpoint&&serviceKey&&env.TWILIO_ACCOUNT_SID&&env.TWILIO_AUTH_TOKEN&&env.TWILIO_VERIFY_SERVICE_SID&&env.TWILIO_WHATSAPP_FROM&&env.TWILIO_WHATSAPP_CONTENT_SID);
const error=(message,status=400)=>Object.assign(new Error(message),{status});
async function database(route,{method='GET',body,token,key=env.SUPABASE_ANON_KEY}={}){
 const response=await fetch(`${endpoint}${route}`,{method,headers:{apikey:key,Authorization:`Bearer ${token||key}`,'Content-Type':'application/json',Prefer:'return=representation'},...(body?{body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(15000)});
 const data=await response.json().catch(()=>null);if(!response.ok)throw error(data?.message||'Reminder settings could not be saved.');return data;
}
async function twilio(url,fields){
 const response=await fetch(url,{method:'POST',headers:{Authorization:`Basic ${Buffer.from(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`).toString('base64')}`,'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(fields),signal:AbortSignal.timeout(15000)});
 const data=await response.json();if(!response.ok)throw error('The messaging service is unavailable. Please try again later.',502);return data;
}
export async function notificationAccount(action,payload,{user,token}){
 if(!providerReady())return {configured:false,preferences:null,message:'Automatic WhatsApp reminders are not enabled on this deployment yet.'};
 const own=()=>database(`/rest/v1/koottu_notification_preferences?user_id=eq.${user.id}&select=phone,verified,opt_in`,{token});
 if(action==='notifications')return {configured:true,preferences:(await own())[0]||null};
 if(action==='verify-phone'){
  const phone=String(payload.phone||'').trim();if(!/^\+[1-9]\d{7,14}$/.test(phone))throw error('Use a phone number with its country code, for example +919876543210.');
  if(payload.consent!==true)throw error('Confirm that you want a verification code sent to your number.');
  await database('/rest/v1/rpc/koottu_start_phone_verification',{method:'POST',token,body:{phone_number:phone}});
  await twilio(`https://verify.twilio.com/v2/Services/${env.TWILIO_VERIFY_SERVICE_SID}/Verifications`,{To:phone,Channel:'sms'});
  return {ok:true,message:'A verification code has been sent by SMS.'};
 }
 if(action==='confirm-phone'){
  const phone=(await own())[0]?.phone;const code=String(payload.code||'');if(!phone||!/^\d{4,10}$/.test(code))throw error('Enter the code sent to your phone.');
  const checked=await twilio(`https://verify.twilio.com/v2/Services/${env.TWILIO_VERIFY_SERVICE_SID}/VerificationCheck`,{To:phone,Code:code});
  if(checked.status!=='approved')throw error('That code could not be verified. Please check it and try again.');
  await database('/rest/v1/rpc/koottu_verify_phone',{method:'POST',key:serviceKey,body:{target_user:user.id,phone_number:phone}});
  return {ok:true};
 }
 if(action==='notification-consent'){
  await database('/rest/v1/rpc/koottu_set_notification_consent',{method:'POST',token,body:{enabled:payload.optIn===true}});return {ok:true};
 }
 throw error('Unknown reminder setting.',404);
}
export function reminderBalance(snapshot,userId){
 let balance=0;
 for(const expense of snapshot.expenses||[]){const paid=expense.contributions||{[expense.payerId]:expense.amount};balance+=Number(paid[userId]||0)-Number(expense.shares?.[userId]||0);}
 for(const payment of snapshot.settlements||[]){if(!payment.paid)continue;if(payment.from===userId)balance+=Number(payment.amount||0);if(payment.to===userId)balance-=Number(payment.amount||0);}
 return Math.round(balance);
}
export async function runReminders(request){
 const expected=env.CRON_SECRET||'';const provided=String(request.headers.authorization||'').replace(/^Bearer\s+/i,'');
 if(expected.length<32||Buffer.byteLength(provided)!==Buffer.byteLength(expected)||!timingSafeEqual(Buffer.from(provided),Buffer.from(expected)))throw error('Unauthorized.',401);
 if(!providerReady())return {enabled:false,queued:0};
 const recipients=await database('/rest/v1/koottu_notification_preferences?verified=eq.true&opt_in=eq.true&select=user_id,phone&limit=100',{key:serviceKey});
 let queued=0,failed=0;const started=Date.now();
 outer: for(const recipient of recipients){
  if(Date.now()-started>80000||queued+failed>=30)break;
  const memberships=await database(`/rest/v1/koottu_members?user_id=eq.${recipient.user_id}&select=group_id,koottu_groups(id,name,snapshot)`,{key:serviceKey});
  for(const membership of memberships){
   if(Date.now()-started>80000||queued+failed>=30)break outer;
   const group=membership.koottu_groups;if(!group)continue;const balance=reminderBalance(group.snapshot,recipient.user_id);if(!balance)continue;
   const claim=await database('/rest/v1/rpc/koottu_claim_reminder',{method:'POST',key:serviceKey,body:{target_user:recipient.user_id,target_group:group.id}});if(!claim)continue;
   try{
    const fresh=(await database(`/rest/v1/koottu_notification_preferences?user_id=eq.${recipient.user_id}&verified=eq.true&opt_in=eq.true&select=phone`,{key:serviceKey}))[0];if(!fresh)continue;
    const me=group.snapshot.households.find(h=>h.id===recipient.user_id);
    const amount=new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(Math.abs(balance));
    const result=await twilio(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`,{To:`whatsapp:${fresh.phone}`,From:env.TWILIO_WHATSAPP_FROM,ContentSid:env.TWILIO_WHATSAPP_CONTENT_SID,ContentVariables:JSON.stringify({'1':String(me?.name||'Roommate').replace(/[\r\n]/g,' '),'2':String(group.name).replace(/[\r\n]/g,' '),'3':balance<0?`You owe ${amount}`:`You should receive ${amount}`,'4':env.APP_URL||'https://koottu-shared-flat-ledger.vercel.app/'})});
    await database(`/rest/v1/koottu_reminder_deliveries?id=eq.${claim}`,{method:'PATCH',key:serviceKey,body:{status:'queued',provider_id:result.sid}});queued++;
   }catch{failed++;await database(`/rest/v1/koottu_reminder_deliveries?id=eq.${claim}`,{method:'PATCH',key:serviceKey,body:{status:'failed'}});}
  }
 }
 return {enabled:true,queued,failed};
}
