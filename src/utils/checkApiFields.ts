import { default as config } from '../config.json'

import isEmpty from './isEmpty'
import hasSql from './hasSql'

const checkApiFields = (url: string, data: object) => {
  const { api } = config

  const rules = api[url]?.body || {}

  console.log(data)

  return Object.keys(data).every(field => {
    // console.log(`rules[${field}]: ${rules[field]}`)
    if (rules[field] && typeof data[field] !== rules[field].type) {
      return false
    }
    console.log('canHasSQL:', rules[field].canHasSQL)
    if (!rules[field].canHasSQL) {
      return !hasSql(data[field])
    }
    
    return true
  })
}

export default checkApiFields
