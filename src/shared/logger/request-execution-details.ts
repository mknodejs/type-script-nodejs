import { Request, Response, NextFunction } from 'express'
import shortid from 'shortid'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import setValue from 'set-value'
import getValue from 'get-value'
import * as logger from './index'

export const addRequestId = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!getValue(req, 'header.x-request-id')) setValue(req, 'header.x-request-id', shortid())
    const metaData = {
      webServices: []
    }
    setValue(req, 'header.app_req_custom_meta_data', metaData)
  } catch (error) {
  } finally {
    next()
  }
}

export const logWebServiceDetails = (
  req: Request,
  config: AxiosRequestConfig,
  webServiceName: string,
  startTime: number,
  response: AxiosResponse
) => {
  try {
    const status = getValue(response, 'status')
    const webServices = getValue(req, 'header.app_req_custom_meta_data.webServices')
    if (webServices) {
      webServices.push({
        webServiceName,
        status,
        url: config.url,
        executionTime: Date.now() - startTime,
        data: response.data
      })
    }
  } catch (error) {}
}

export const printExecutionDetails = (req: Request, startTime: number) => {
  try {
    const metaData = getValue(req, 'header.app_req_custom_meta_data')
    if (metaData) {
      const executionTime = Date.now() - startTime
      logger.info(req, 'execution_summary', { ...metaData, executionTime })
    }
  } catch (error) {}
}
