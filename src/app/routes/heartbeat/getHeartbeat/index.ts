import { RequestHandler } from 'express'
import { Heartbeat } from './heartbeat.model'
import { Response } from '../../../shared/response/response'

export const getHeartbeat: RequestHandler = (req, res, next) => {
  const heartbeat: Heartbeat = { id: '1', text: 'Test' }
  const response = new Response(heartbeat)
  res.json({ response })
}
