const checkForSql = (data) => {
  const sqlRegex = new RegExp('\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))', 'i');
  
  return sqlRegex.test(data);
    
};

const middleware = async (ctx, next) => {
  const data = JSON.stringify(ctx.request.body);
  const url = ctx.request.url

  if (checkForSql(data) || checkForSql(url) ) {
    ctx.status = 400;
    ctx.body = { message: 'UNSAFE REQUEST' }

    // TODO: Notificate to administrator

    return
  }

  await next()
}

export default middleware;