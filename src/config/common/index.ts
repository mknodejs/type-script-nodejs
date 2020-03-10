import { schema } from './schema'

const config = (env: any) => {
  const data = {
    logLevel: env.LOG_LEVEL
  }
  const { error, value } = schema.validate(data)
  if (error) {
    console.log({ error, value })
    throw new Error('Common config issue')
  }
  return value
}

export default config
