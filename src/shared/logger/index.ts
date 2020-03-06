import { config } from '../../config'
import { RequestWithMetaData } from './search-keys'
import { Request } from 'express'
import { logger } from './winston'
interface LogInput {
  (req: Request, data: any): void
}

const LogLevels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
}

const LOG_LEVEL = LogLevels[config.common.logLevel]
const NODE_ID = Date.now() + Math.floor(Math.random() * 1000)
const donotLog = (logLevels: number) => logLevels < LOG_LEVEL

export const error: LogInput = async (req, data) => {
  if (donotLog(LogLevels.error)) return
  logger.log({ level: 'error', message: enrichWithSearchKeys(req, data) })
}

export const warn: LogInput = async (req, data) => {
  if (donotLog(LogLevels.warn)) return
  logger.log({ level: 'warn', message: enrichWithSearchKeys(req, data) })
}

export const info: LogInput = async (req, data) => {
  if (donotLog(LogLevels.info)) return
  logger.log({ level: 'info', message: enrichWithSearchKeys(req, data) })
}

export const debug: LogInput = async (req, data) => {
  if (donotLog(LogLevels.debug)) return
  logger.log({ level: 'debug', message: enrichWithSearchKeys(req, data) })
}

const enrichWithSearchKeys = (req: Request, data: any): any => {
  const request = <RequestWithMetaData>req
  let requestId = 'NA'
  if (request.node_app_req_custom_meta_data) {
    requestId = request.node_app_req_custom_meta_data.requestId || 'NA'
  }
  return {
    data,
    searchKeys: { nodeId: NODE_ID, requestId }
  }
}
