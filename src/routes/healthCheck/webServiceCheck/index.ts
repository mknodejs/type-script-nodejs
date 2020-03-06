import { Request } from 'express'
import { Response, IResponse } from '../../../shared/response/response'
import { OcapiRequestInput, ocapiRequest } from '../../../shared/webService/ocapi'

export const webservicecheck = async (req: Request): Promise<IResponse> => {
  const input: OcapiRequestInput = {
    url: '/healthcheck',
    method: 'get'
  }
  const response = await ocapiRequest(req, input)
  return new Response(response.data)
}
