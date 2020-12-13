import Koa from 'koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
import proxy from 'koa-better-http-proxy';

import sqlMiddleware from './sqlMiddleware';

const app = new Koa();

app
    .use(parser())
    .use(logger())
    .use(sqlMiddleware)

app.use(proxy('localhost', {
  port: 5000,
  userResDecorator: (proxyRes, proxyResData, ctx) => {
    // TODO: Check response
  }
}));

console.log("listening on port 5050")
app.listen(5050);