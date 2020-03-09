import { restWebServiceRequest, WebServiceInput } from './axios'
import { Method, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Request } from 'express'
// https://www.npmjs.com/package/axios

const WEB_SERVICE_NAME = 'ocapi_sfcc'

const CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000/',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
}

export interface OcapiRequestInput extends WebServiceInput {}

export const ocapiRequest = async (
  req: Request,
  input: OcapiRequestInput
): Promise<AxiosResponse> => {
  const requestConfig = {
    ...CONFIG,
    method: <Method>input.method,
    url: input.url
  }
  const response = await restWebServiceRequest(req, requestConfig, WEB_SERVICE_NAME)
  return response
}
