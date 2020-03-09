import httpCodes from './http-status-codes'
import common from './common'
import shortid from 'shortid'
import dotenv from 'dotenv'
dotenv.config()

const SERVER_INSTANCE_ID = 'id_' + shortid()
const ENV = 'localhost'

const HTTP_CODES = httpCodes

const config = {
  serverId: SERVER_INSTANCE_ID,
  common: common(process.env),
  httpCodes: HTTP_CODES
}

console.log({ ENV, config, configTime: new Date() })
export { config }
