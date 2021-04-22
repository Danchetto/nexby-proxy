import { default as config } from '../config.json'

import hasSql from '../utils/hasSql'
import checkApiFields from '../utils/checkApiFields'


const middleware = async (ctx, next) => {
  const data = ctx.request.body;
  const url = ctx.request.url

  if (!checkApiFields(url, data) || hasSql(url) ) {
    ctx.status = 403;
    ctx.body = 'The request contains an injection. Rejected.'

    // TODO: Notificate to administrator

    return
  }

  await next()
}

export default middleware;