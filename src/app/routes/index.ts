import healthCheckRouter from './healthCheck'
import RouterBuilder from '../shared/route/routerBuilder'
type Routers = [string, RouterBuilder]

const getRouters = () => {
  const routers: Routers[] = [['/healthcheck', healthCheckRouter]]
  return routers
}

export default getRouters
