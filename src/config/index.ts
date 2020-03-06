import httpCodes from './http-status-codes'
import common from './common'
import shortid from 'shortid'

const SERVER_INSTANCE_ID = 'id_' + shortid()
const ENV = 'localhost'

const COMMON = common(ENV)
const HTTP_CODES = httpCodes

const config = {
  serverId: SERVER_INSTANCE_ID,
  common: COMMON,
  httpCodes: HTTP_CODES
}

console.log({ ENV, serverId: SERVER_INSTANCE_ID, configTime: new Date() })
export { config }
