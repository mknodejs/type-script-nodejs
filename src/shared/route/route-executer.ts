import { Request, Response, NextFunction } from 'express'
import { RouteCallback } from './route-callback'
import { ErrorResponse } from '../response/response'
import * as logger from '../logger'
import getValue from 'get-value'
import { printExecutionDetails } from '../logger/request-execution-details'

const routeExecuter = (routeCallback: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
  const executer = async (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now()
    try {
      const params = getValue(req, 'params', 'NA')
      const body = getValue(req, 'body', 'NA')
      logger.debug(req, 'route_executer_input', { params, body })
      const response = await routeCallback(req)
      logger.debug(req, 'route_executer_response', { response })
      res.status(response.httpCode).json(response.data)
    } catch (error) {
      logger.error(req, 'route_executer_error', { error })
      if (defaultErrorResponse) {
        res.status(defaultErrorResponse.httpCode).json(defaultErrorResponse.data)
      } else {
        const errorResponse = new ErrorResponse({ systemError: error.message })
        res.status(errorResponse.httpCode).json(errorResponse.data)
      }
    } finally {
      printExecutionDetails(req, startTime)
      logger.debug(req, 'route_executer', { executionTime: Date.now() - startTime })
    }
  }
  return executer
}

export default routeExecuter
