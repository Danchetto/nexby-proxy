const hasSql = (data: string) => {
  const sqlRegex = new RegExp('\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))', 'i')
  
  return sqlRegex.test(data)
}

export default hasSql