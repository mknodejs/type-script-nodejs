import { config } from '../../config'

export interface IResponse {
  httpCode: number
  type: string
  data: any
}

export class Response implements IResponse {
  readonly httpCode: number = config.httpCodes.success
  readonly type: string = 'success'
  constructor(public data: any) {}
}

export class WarnResponse implements IResponse {
  readonly httpCode: number = config.httpCodes.warn
  readonly type: string = 'warn'
  constructor(public data: any) {}
}

export class ErrorResponse implements IResponse {
  readonly httpCode: number = config.httpCodes.error
  readonly type: string = 'error'
  constructor(public data: any) {}
}

export class FatalResponse implements IResponse {
  readonly httpCode: number = config.httpCodes.fatal
  readonly type: string = 'fatal'
  constructor(public data: any) {}
}
