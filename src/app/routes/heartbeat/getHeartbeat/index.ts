import { RequestHandler } from 'express'
import { Heartbeat } from './heartbeat.model'

export const getHeartbeat: RequestHandler = (req, res, next) => {
  const heartbeat: Heartbeat = { id: '1', text: 'Test' }
  res.json({ heartbeat })
}
