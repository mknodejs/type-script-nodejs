import { Request, Response, NextFunction } from 'express'
import { RouteCallback } from './routeCallback'
import { ErrorResponse } from '../response/response'
import * as logger from '../logger'

const routeExecuter = (routeCallback: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
  const executer = async (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now()
    try {
      const response = await routeCallback(req)
      res.status(response.httpCode).json(response.data)
    } catch (error) {
      console.log(error)
      if (defaultErrorResponse) {
        res.status(defaultErrorResponse.httpCode).json(defaultErrorResponse.data)
      } else {
        const errorResponse = new ErrorResponse({ systemError: error.message })
        res.status(errorResponse.httpCode).json(errorResponse.data)
      }
    } finally {
      logger.debug(req, { executionTime: Date.now() - startTime })
    }
  }
  return executer
}

export default routeExecuter
