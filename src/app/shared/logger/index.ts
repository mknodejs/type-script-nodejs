import { LogLevels, donotLog } from './config'
import { Request } from 'express'
import { logger } from './winston'
interface LogInput {
  (req: Request, data: any): void
}

export const error: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Error)) return
  logger.log({ level: 'error', message: data })
}

export const warn: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Warn)) return
  logger.log({ level: 'warn', message: data })
}

export const info: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Info)) return
  logger.log({ level: 'info', message: data })
}

export const debug: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Debug)) return
  logger.log({ level: 'debug', message: data })
}
