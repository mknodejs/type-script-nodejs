import { Request, Response, NextFunction } from 'express'
import shortid from 'shortid'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

type WebServiceData = { serviceName: string; status?: number; url?: string; executionTime?: number }

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
      requestId: shortid(),
      startTime: Date.now(),
      webServices: []
    }
  } catch (error) {
  } finally {
    next()
  }
}

export const logExecutionDetails = (
  req: Request,
  config: AxiosRequestConfig,
  webServiceName: string,
  startTime: number,
  response?: AxiosResponse
) => {
  try {
    const request = <RequestWithMetaData>req
    let status = 1
    if (response && response.status) status = response.status
    const metaData = request.node_app_req_custom_meta_data
    if (metaData && metaData.webServices) {
      metaData.webServices.push({
        serviceName: webServiceName,
        status,
        url: config.url,
        executionTime: startTime - Date.now()
      })
    }
  } catch (error) {}
}
