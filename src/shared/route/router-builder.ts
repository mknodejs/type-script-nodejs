import { Router } from 'express'
import { RouteCallback } from './route-callback'
import { ErrorResponse } from '../response/response'
import routeExecuter from './route-executer'

interface RouterHandler {
  (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse): void
}

export default class RouterBuilder {
  private readonly router = Router()
  private swagger = { paths: {}, definitions: {} }
  get: RouterHandler = (path, cb, defaultErrorResponse) => {
    this.router.get(path, routeExecuter(cb, defaultErrorResponse))
  }
  post: RouterHandler = (path, cb, defaultErrorResponse) => {
    this.router.post(path, routeExecuter(cb, defaultErrorResponse))
  }
  put: RouterHandler = (path, cb, defaultErrorResponse) => {
    this.router.put(path, routeExecuter(cb, defaultErrorResponse))
  }
  patch: RouterHandler = (path, cb, defaultErrorResponse) => {
    this.router.patch(path, routeExecuter(cb, defaultErrorResponse))
  }
  delete: RouterHandler = (path, cb, defaultErrorResponse) => {
    this.router.delete(path, routeExecuter(cb, defaultErrorResponse))
  }
  addSwagger = (swaggerDoc: any) => {
    if (!swaggerDoc.paths) throw new Error('invalid swagger doc')
    this.swagger = swaggerDoc
  }
  getSwagger = () => {
    return this.swagger
  }
  getRouter = () => {
    return this.router
  }
}
