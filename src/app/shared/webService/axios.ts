import axios, { Method, AxiosRequestConfig, AxiosResponse } from 'axios'
//import * as logger from '../logger'

export interface WebServiceInput {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
}

// https://www.npmjs.com/package/axios
export const get = async (config?: AxiosRequestConfig) => {
  const requestConfig = {
    ...config,
    method: <Method>'get'
  }
  const response = await restWebServiceRequest(requestConfig)
  return response
}

export const restWebServiceRequest = async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
  const startTime = Date.now()
  try {
    const instance = axios.create()
    const response = await instance.request(config)
    return response
  } catch (error) {
    console.log({ error })
    throw error
  } finally {
    console.log({ type: 'restWebServiceRequest', executionTime: Date.now() - startTime })
  }
}
