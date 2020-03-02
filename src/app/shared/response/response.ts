export interface IResponse {
  httpCode: number
  type: string
  data: any
}

export class Response implements IResponse {
  readonly httpCode: number = 200
  readonly type: string = 'success'
  constructor(public data: any) {}
}

export class WarnResponse implements IResponse {
  readonly httpCode: number = 299
  readonly type: string = 'warn'
  constructor(public data: any) {}
}

export class ErrorResponse implements IResponse {
  readonly httpCode: number = 598
  readonly type: string = 'error'
  constructor(public data: any) {}
}

export class FatalResponse implements IResponse {
  readonly httpCode: number = 599
  readonly type: string = 'fatal'
  constructor(public data: any) {}
}
