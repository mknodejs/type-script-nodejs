import healthCheckRouter from './health-check'
import RouterBuilder from '../shared/route/router-builder'
type Routers = [string, RouterBuilder]

const getRouters = () => {
  const routers: Routers[] = [['/healthcheck', healthCheckRouter]]
  return routers
}

export default getRouters
