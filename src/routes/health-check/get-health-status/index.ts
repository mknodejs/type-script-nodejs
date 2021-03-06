import { Request } from 'express'
import { HealthStatus } from './health.model'
import { Response, IResponse } from '../../../shared/response/response'
import shortid from 'shortid'

export const getHealthStatus = async (req: Request): Promise<IResponse> => {
  const healthStatus: HealthStatus = { id: shortid(), status: 'ok' }
  return new Response(healthStatus)
}
