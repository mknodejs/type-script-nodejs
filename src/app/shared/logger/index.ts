import { LogLevels, donotLog } from './config'
import { Request } from 'express'

interface LogInput {
  (req: Request, data: any): void
}

export const error: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Error)) return
  console.log({ data })
}

export const warn: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Warn)) return
  console.log({ data })
}

export const info: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Info)) return
  console.log({ data })
}

export const debug: LogInput = async (req, data) => {
  if (donotLog(LogLevels.Debug)) return
  console.log({ data })
}
