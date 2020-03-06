export enum LogLevels {
  Debug,
  Info,
  Warn,
  Error
}

const LOG_LEVEL: LogLevels = LogLevels.Debug
export const NODE_ID = Date.now() + Math.floor(Math.random() * 1000)

export const donotLog = (logLevels: LogLevels) => {
  if (logLevels < LOG_LEVEL) return true
  return false
}
