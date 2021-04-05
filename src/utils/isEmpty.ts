const isEmpty = (data: object): boolean => {
  if (!data || Object.keys(data).length === 0) {
    return false
  }

  return true
}

export default isEmpty