import { Router } from 'express'
import { RouteCallback } from './routeCallback'
import { ErrorResponse } from '../response/response'
import routeExecuter from './routeExecuter'

interface RouterHandler {
  (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse): void
}

export default class RouterBuilder {
  private readonly router = Router()
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
  getRouter = () => {
    return this.router
  }
}
