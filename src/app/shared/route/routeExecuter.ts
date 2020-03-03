import { Request, Response, NextFunction } from 'express'
import { RouteCallback } from './routeCallback'
import { IResponse, ErrorResponse } from '../response/response'

const routeExecuter = (routeCallback: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
  const executer = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now()
    try {
      const response: IResponse = routeCallback(req)
      res.status(response.httpCode).json(response.data)
    } catch (error) {
      console.log(error)
      if (defaultErrorResponse) {
        res.status(defaultErrorResponse.httpCode).json(defaultErrorResponse.data)
      }
    } finally {
      console.log({ executionTime: Date.now() - startTime })
    }
  }
  return executer
}

export default routeExecuter
