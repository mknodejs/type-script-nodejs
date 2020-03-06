import httpCodes from './http-status-codes'
import common from './common'

const COMMON = common('localhost')
const HTTP_CODES = httpCodes

const config = {
  common: COMMON,
  httpCodes: HTTP_CODES
}

console.log({ config })
export { config }
