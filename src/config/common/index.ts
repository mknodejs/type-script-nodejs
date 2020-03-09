//import getValue from 'get-value'
import { schema } from './schema'
//const Joi = require('@hapi/joi')

const config = (env: any) => {
  const configData = {
    logLevel: env.LOG_LEVEL
  }
  const { error, value } = schema.validate(configData)
  if (error) {
    console.log({ error, value })
    throw new Error('Common config issue')
  }
  return value
}

export default config
