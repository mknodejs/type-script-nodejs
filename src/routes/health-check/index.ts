import { getHealthStatus } from './get-health-status'
import { webservicecheck } from './webservice-check'
import RouterBuilder from '../../shared/route/router-builder'
import * as swagger from './swagger.json'

const router = new RouterBuilder()
router.get('/', getHealthStatus)
router.get('/webservicecheck', webservicecheck)
router.addSwagger(swagger)

export default router
