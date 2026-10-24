import {handleRequest} from '../server.mjs';
export const config={api:{bodyParser:false}};
export default async function remindersHandler(request,response){
 request.url='/api/reminders/run';
 return handleRequest(request,response);
}
