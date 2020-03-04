import { Request } from 'express'
import { Response, IResponse } from '../../../shared/response/response'
import * as axios from '../../../shared/webService/axios'

export const webservicecheck = async (req: Request): Promise<IResponse> => {
  const response = await axios.get()
  return new Response(response.data)
}
