import {handleRequest} from '../server.mjs';
export const config={api:{bodyParser:false}};
export default async function accountHandler(request,response){
 const url=new URL(request.url,'http://localhost');
 const action=request.query?.action || url.searchParams.get('action');
 if(typeof action==='string'&&/^[a-z-]{1,40}$/.test(action))request.url=`/api/account/${action}`;
 return handleRequest(request,response);
}
