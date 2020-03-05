import { LogLevels, donotLog, NODE_ID } from './config'
import { RequestWithMetaData } from './searchKeys'
import { Request } from 'express'
import { logger } from './winston'
interface LogInput {
  (req: Request, data: any): void
}

export const error: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Error)) return
  logger.log({ level: 'error', message: enrichWithSearchKeys(req, data) })
}

export const warn: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Warn)) return
  logger.log({ level: 'warn', message: enrichWithSearchKeys(req, data) })
}

export const info: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Info)) return
  logger.log({ level: 'info', message: enrichWithSearchKeys(req, data) })
}

export const debug: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Debug)) return
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
