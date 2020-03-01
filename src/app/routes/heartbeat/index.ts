import { getHeartbeat } from './getHeartbeat'
import { Router } from 'express'

const router = Router()
router.get('/', getHeartbeat)

export default router
