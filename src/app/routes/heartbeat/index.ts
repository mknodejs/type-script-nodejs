import { getHeartbeat } from './getHeartbeat'
import RouterBuilder from '../../shared/route/routerBuilder'

const router = new RouterBuilder()
router.get('/', getHeartbeat)

export default router
