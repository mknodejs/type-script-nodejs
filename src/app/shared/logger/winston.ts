import { addColors, createLogger, format, transports } from 'winston'
const { combine, timestamp, colorize, json, prettyPrint } = format
const envType = 'dev'

const colors = {
  error: 'red',
  warn: 'magenta',
  info: 'yellow',
  debug: 'blue'
}

const getDevLogger = () => {
  addColors(colors)
  const console = new transports.Console({
    format: combine(json(), prettyPrint(), colorize({ all: true }))
  })
  const format = combine(timestamp(), json(), prettyPrint())
  const logFile = new transports.File({ filename: './logs/all.log', format })
  const errorFile = new transports.File({ level: 'error', filename: './logs/error.log', format })
  const logger = createLogger({
    level: 'debug',
    transports: [console, logFile, errorFile]
  })
  return logger
}

const getLogger = () => {
  const logger = createLogger({
    level: 'debug',
    format: combine(timestamp(), json()),
    transports: [new transports.Console()]
  })
  return logger
}

export const logger = envType === 'dev' ? getDevLogger() : getLogger()
