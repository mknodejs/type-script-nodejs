import heartbeatRouter from './heartbeat'
import { Router } from 'express'

const getRouters = () => {
  const routers: [[string, Router]] = [['/heartbeat', heartbeatRouter]]
  return routers
}

export default getRouters
