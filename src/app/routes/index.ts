import heartbeatRouter from './healthCheck'
import RouterBuilder from '../shared/route/routerBuilder'

const getRouters = () => {
  const routers: [[string, RouterBuilder]] = [['/healthcheck', heartbeatRouter]]
  return routers
}

export default getRouters
