import { config } from '../../config'
import { Request } from 'express'
import { logger } from './winston'
import getValue from 'get-value'

interface LogInput {
  (req: Request, logKey: string, data: any): void
}

const LogLevels = {
  debug: [0, 'debug'],
  info: [1, 'info'],
  warn: [2, 'warn'],
  error: [3, 'error']
}

const LOG_LEVEL = getValue(LogLevels, `${config.common.logLevel}.0`) || 2
const donotLog = (logLevels: number) => logLevels < LOG_LEVEL

export const error: LogInput = async (req, logKey, data) => {
  logData(LogLevels.error, req, logKey, data)
}

export const warn: LogInput = async (req, logKey, data) => {
  logData(LogLevels.warn, req, logKey, data)
}

export const info: LogInput = async (req, logKey, data) => {
  logData(LogLevels.info, req, logKey, data)
}

export const debug: LogInput = async (req, logKey, data) => {
  logData(LogLevels.debug, req, logKey, data)
}

const logData = (logLevel: any, req: Request, logKey: string, data: any) => {
  try {
    if (donotLog(logLevel[0])) return
    logger.log({ level: logLevel[1], message: enrichWithSearchKeys(req, logKey, data) })
  } catch (error) {
    console.log({ logKey, error })
  }
}

const enrichWithSearchKeys = (req: Request, logKey: string, data: any): any => {
  const url = getValue(req, 'originalUrl', 'NA')
  const requestId = getValue(req, 'header.x-request-id', 'NA')
  return {
    logKey,
    data,
    searchKeys: { serverId: config.serverId, requestId, url }
  }
}
