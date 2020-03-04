import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Request } from 'express'
import * as logger from '../logger'

export interface WebServiceInput {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
}

// https://www.npmjs.com/package/axios
export const restWebServiceRequest = async (
  req: Request,
  config: AxiosRequestConfig,
  webServiceName: string
): Promise<AxiosResponse> => {
  const startTime = Date.now()
  try {
    const instance = axios.create()
    const response = await instance.request(config)
    return response
  } catch (error) {
    logger.error(req, { error })
    throw error
  } finally {
    logger.info(req, { webServiceName, executionTime: Date.now() - startTime })
  }
}
