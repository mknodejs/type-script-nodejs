export enum LogLevels {
  Debug,
  Info,
  Warn,
  Error
}

const LOG_LEVEL: LogLevels = LogLevels.Debug

export const donotLog = (logLevels: LogLevels) => {
  if (logLevels < LOG_LEVEL) return true
  return false
}
