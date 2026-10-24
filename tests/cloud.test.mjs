import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Readable} from 'node:stream';
process.env.SUPABASE_URL='https://example.supabase.co';
process.env.SUPABASE_ANON_KEY='test-anon-key';
const {validateLedger,accountRoute,requireAccount}=await import('../cloud.mjs');
const {handleRequest}=await import('../server.mjs');
const state=()=>({households:[{id:'a',name:'Riya'},{id:'b',name:'Hanna'}],expenses:[{id:'e1',title:'Dinner',amount:900,date:'2026-10-24',contributions:{a:600,b:300},shares:{a:450,b:450}}],settlements:[]});
test('multiple payers and selected participants have matching integer totals',()=>assert.equal(validateLedger(state()).expenses.length,1));
test('reject mismatches, negative shares, outsiders, duplicate IDs and invalid repayments',()=>{
 for(const mutate of [s=>s.expenses[0].shares.b=400,s=>s.expenses[0].shares.b=-100,s=>s.expenses[0].shares={x:900},s=>s.households.push({id:'a',name:'Other'}),s=>s.settlements.push({id:'s1',from:'a',to:'a',amount:100,paid:true})]){
 const s=state();mutate(s);assert.throws(()=>validateLedger(s));
 }
});
test('account identity is verified at Supabase using the caller token',async()=>{
 const old=global.fetch;global.fetch=async(url,options)=>{assert.equal(options.headers.Authorization,'Bearer actual-user-token');assert.ok(url.endsWith('/auth/v1/user'));return Response.json({id:'user-id'});};
 try{const auth=await requireAccount({headers:{authorization:'Bearer actual-user-token'}});assert.equal(auth.user.id,'user-id');await assert.rejects(requireAccount({headers:{}}),/sign in/);}finally{global.fetch=old;}
});
test('nonmembers cannot load a group; write conflicts return an explicit 409',async()=>{
 const old=global.fetch;global.fetch=async url=>url.includes('/auth/v1/user')?Response.json({id:'test-user'}):url.includes('/koottu_groups?')?Response.json([]):Response.json({message:'LEDGER_CONFLICT'},{status:400});
 const request={headers:{authorization:'Bearer token'}};
 try{
 await assert.rejects(accountRoute(request,'/api/account/load',{groupId:'00000000-0000-0000-0000-000000000001'}),e=>e.status===403);
 await assert.rejects(accountRoute(request,'/api/account/save',{groupId:'g',revision:1,state:state()}),e=>e.status===409);
 }finally{global.fetch=old;}
});
async function call(url,method='GET',payload){const req=Readable.from(payload?[Buffer.from(JSON.stringify(payload))]:[]);Object.assign(req,{url,method,headers:{host:'localhost'}});let status=0,body='',headers={};const res={setHeader(k,v){headers[k]=v},writeHead(s,h){status=s;headers={...headers,...h}},end(data){body=String(data)}};await handleRequest(req,res);return {status,body,headers};}
test('public config never exposes keys; hosted AI requires sign-in when accounts are configured',async()=>{
 const config=await call('/api/account/config');assert.equal(config.status,200);assert.deepEqual(JSON.parse(config.body),{enabled:true});assert.ok(!config.body.includes('test-anon-key'));
 const ai=await call('/api/parse-expense','POST',{text:'hello'});assert.equal(ai.status,401);
 const hidden=await call('/.env.local');assert.equal(hidden.status,404);
 const script=await call('/account.js');assert.equal(script.status,200);
});
test('reminder balance accounts for partial repayments and cron rejects missing authentication',async()=>{
 const {reminderBalance,runReminders}=await import('../reminders.mjs');
 const s=state();s.settlements=[{from:'b',to:'a',amount:50,paid:true}];
 assert.equal(reminderBalance(s,'a'),100);assert.equal(reminderBalance(s,'b'),-100);
 await assert.rejects(runReminders({headers:{}}),e=>e.status===401);
});
test('phone verification requires consent and cannot mark an unapproved code verified',async()=>{
 const settings={SUPABASE_SERVICE_ROLE_KEY:'test-service-role',TWILIO_ACCOUNT_SID:'ACtest',TWILIO_AUTH_TOKEN:'test-token',TWILIO_VERIFY_SERVICE_SID:'VAtest',TWILIO_WHATSAPP_FROM:'whatsapp:+19999999999',TWILIO_WHATSAPP_CONTENT_SID:'HXtest'};
 const previous=Object.fromEntries(Object.keys(settings).map(k=>[k,process.env[k]]));Object.assign(process.env,settings);
 const {notificationAccount}=await import('../reminders.mjs?verification-test');let approved=false,marked=false;
 const old=global.fetch;global.fetch=async(url,options)=>{
  if(url.includes('notification_preferences?'))return Response.json([{phone:'+919999999999'}]);
  if(url.includes('VerificationCheck'))return Response.json({status:approved?'approved':'pending'});
  if(url.includes('koottu_verify_phone')){assert.equal(options.headers.Authorization,'Bearer test-service-role');marked=true;return Response.json(null);}
  throw new Error('Unexpected outbound request');
 };
 try{
  await assert.rejects(notificationAccount('verify-phone',{phone:'+919999999999',consent:false},{user:{id:'u'},token:'member-token'}),/Confirm/);
  await assert.rejects(notificationAccount('confirm-phone',{code:'123456'},{user:{id:'u'},token:'member-token'}),/could not be verified/);assert.equal(marked,false);
  approved=true;await notificationAccount('confirm-phone',{code:'123456'},{user:{id:'u'},token:'member-token'});assert.equal(marked,true);
 }finally{global.fetch=old;for(const k of Object.keys(settings)){if(previous[k]===undefined)delete process.env[k];else process.env[k]=previous[k];}}
});
