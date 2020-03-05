import { Request, Response, NextFunction } from 'express'
import shortid from 'shortid'

type WebServiceData = { serviceName: string; status: string; url: string; executionTime: number }

export interface RequestWithMetaData extends Request {
  node_app_req_custom_meta_data?: {
    startTime?: number
    requestId?: string
    webServices?: WebServiceData[]
  }
}

export const addRequestId = (req: Request, res: Response, next: NextFunction) => {
  try {
    const request = <RequestWithMetaData>req
    request.node_app_req_custom_meta_data = {
      requestId: shortid()
    }
  } catch (error) {
  } finally {
    next()
  }
}
