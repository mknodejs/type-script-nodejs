import { LogLevels, donotLog, NODE_ID } from './config'
import { Request } from 'express'
import { logger } from './winston'
interface LogInput {
  (req: Request, data: any): void
}

export const error: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Error)) return
  logger.log({ level: 'error', message: enrichWithMetadata(req, data) })
}

export const warn: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Warn)) return
  logger.log({ level: 'warn', message: enrichWithMetadata(req, data) })
}

export const info: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Info)) return
  logger.log({ level: 'info', message: enrichWithMetadata(req, data) })
}

export const debug: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Debug)) return
  logger.log({ level: 'debug', message: enrichWithMetadata(req, data) })
}

const enrichWithMetadata = (req: Request, data: any): any => {
  return {
    ...data,
    nodeId: NODE_ID
  }
}
