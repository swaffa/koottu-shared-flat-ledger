import { handleRequest } from '../server.mjs';

export const config = {
  api: { bodyParser: false }
};

export default async function apiHandler(request, response) {
  return handleRequest(request, response);
}
