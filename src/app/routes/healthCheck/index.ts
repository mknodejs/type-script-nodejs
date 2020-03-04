import { getHealthStatus } from './getHealthStatus'
import { webservicecheck } from './webServiceCheck'
import RouterBuilder from '../../shared/route/routerBuilder'

const router = new RouterBuilder()
router.get('/', getHealthStatus)
router.get('/webservicecheck', webservicecheck)

export default router
