import { createServer } from 'http';

import { add } from './add.js';

// If the NODE_ENV is set to 'production', which is the recommended approach
// for Node.js container images, we can assume that this is the production environment.
// Various packages respect this environment variable and switch to production mode when
// set to 'production'.
const isDev = process.env['NODE_ENV'] !== 'production';
const port = +(process.env['PORT'] || 8080);
const hostname = isDev ? '127.0.0.1' : '0.0.0.0';

/*************************/
// ATTENTION:
// This is a minimal demonstration sample.
// This should not be used for production!
// We recommend a more robust solution, like express or NestJS.
// However, as mentioned in the README, Node.js as a backend technology
// is not a strategic technology and we will provide only minimal support.
/*************************/

const server = createServer((_req, res) => {
  res.writeHead(200);
  res.end(`My first server! 1 + 2 = ${add(1, 2)}`);
});
server.listen(port, hostname, () => {
  console.log(`Started server on http://${hostname}:${port}`);
});
