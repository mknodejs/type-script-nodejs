import { Request } from 'express'
import { Heartbeat } from './heartbeat.model'
import { Response, IResponse } from '../../../shared/response/response'

export const getHeartbeat = (req: Request): IResponse => {
  const heartbeat: Heartbeat = { id: '1', text: 'Test' }
  return new Response(heartbeat)
}
