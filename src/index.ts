import Koa from 'koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
import proxy from 'koa-better-http-proxy';

import { default as config } from './config.json'

import sqlMiddleware from './middlewares/sqlMiddleware';

const app = new Koa();

app
    .use(parser())
    .use(logger())
    .use(sqlMiddleware)

app.use(proxy(config.service_host, {
  port: +config.service_port,
  userResDecorator: (proxyRes, proxyResData, ctx) => {
    console.log(proxyResData.toString('utf8'))
    let data = proxyResData.toString('utf8')
    try {
      data = JSON.parse(data);
      // data.newProperty = 'exciting data';
    } catch (e) {

    }
    
    
    return JSON.stringify(data);
    // TODO: Check response
  }
}));

console.log("listening on port 5050")
app.listen(config.port || 5050);