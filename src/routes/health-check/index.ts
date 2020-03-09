import { getHealthStatus } from './get-health-status'
import { webservicecheck } from './webservice-check'
import RouterBuilder from '../../shared/route/router-builder'

const router = new RouterBuilder()
router.get('/', getHealthStatus)
router.get('/webservicecheck', webservicecheck)

export default router
