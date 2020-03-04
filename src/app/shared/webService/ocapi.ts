import { restWebServiceRequest, WebServiceInput } from './axios'
import { Method, AxiosRequestConfig, AxiosResponse } from 'axios'

// https://www.npmjs.com/package/axios
//await axios.get('http://localhost:3000/healthcheck')
const CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000/',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
}

export interface OcapiRequestInput extends WebServiceInput {}

export const ocapiRequest = async (input: OcapiRequestInput): Promise<AxiosResponse> => {
  const requestConfig = {
    ...CONFIG,
    method: <Method>input.method,
    url: input.url
  }
  const response = await restWebServiceRequest(requestConfig)
  return response
}
