import heartbeatRouter from './heartbeat'
import RouterBuilder from '../shared/route/routerBuilder'

const getRouters = () => {
  const routers: [[string, RouterBuilder]] = [['/heartbeat', heartbeatRouter]]
  return routers
}

export default getRouters
