import { default as config } from '../config.json'

import hasSql from '../utils/hasSql'
import checkApiFields from '../utils/checkApiFields'
import logger from '../utils/eventLog'


const middleware = async (ctx, next) => {
  const data = ctx.request.body;
  const url = ctx.request.url
  const ip = ctx.request.ip

  if (!checkApiFields(url, data)) {
    ctx.status = 400;
    ctx.body = 'The request validation failed. Rejected.'

    logger.write(`Request from ${ip}. The request validation failed. Rejected.`)
    
    return
  }

  if (hasSql(url) ) {
    ctx.status = 403;
    ctx.body = 'The request contains an injection. Rejected.'

    logger.write(`Request from ${ip}. The request contains an injection. Rejected.`)
    // TODO: Notificate to administrator

    return
  }

  await next()
}

export default middleware;