import Koa from 'koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
import proxy from 'koa-better-http-proxy';
const app = new Koa();

app
    .use(parser())
    .use(logger())

app.use(proxy('localhost', {
  port: 5000
}));

console.log("listening on port 5050")
app.listen(5050);