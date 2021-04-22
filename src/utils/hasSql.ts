const hasSql = (data: string) => {
  const metaSQL = new RegExp('(\%27)|(\')|(\-\-)|(\%23)|(#)', 'i')
  const sqlRegex = new RegExp('\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))', 'i')

  const unionRegex = new RegExp('((\%27)|(\'))union', 'i')
  const deleteRegex = new RegExp('((\%27)|(\'))delete', 'i')
  const selectRegex = new RegExp('((\%27)|(\'))select', 'i')
  const dropRegex = new RegExp('((\%27)|(\'))drop', 'i')
  const insertRegex = new RegExp('((\%27)|(\'))insert', 'i')
  const updateRegex = new RegExp('((\%27)|(\'))update', 'i')
  
  return metaSQL.test(data)
    || sqlRegex.test(data)
    || unionRegex.test(data)
    || deleteRegex.test(data)
    || selectRegex.test(data)
    || dropRegex.test(data)
    || insertRegex.test(data)
    || updateRegex.test(data)
}

export default hasSql