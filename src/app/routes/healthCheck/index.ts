import { getHealthStatus } from './getHealthStatus'
import RouterBuilder from '../../shared/route/routerBuilder'

const router = new RouterBuilder()
router.get('/', getHealthStatus)

export default router
