import { Router } from 'express'
import { RouteCallback } from './routeCallback'
import { ErrorResponse } from '../response/response'
import routeExecuter from './routeExecuter'

export default class RouterBuilder {
  private readonly router = Router()
  get = (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
    this.router.get(path, routeExecuter(cb, defaultErrorResponse))
  }
  post = (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
    this.router.post(path, routeExecuter(cb, defaultErrorResponse))
  }
  put = (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
    this.router.put(path, routeExecuter(cb, defaultErrorResponse))
  }
  patch = (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
    this.router.patch(path, routeExecuter(cb, defaultErrorResponse))
  }
  delete = (path: string, cb: RouteCallback, defaultErrorResponse?: ErrorResponse) => {
    this.router.delete(path, routeExecuter(cb, defaultErrorResponse))
  }
  getRouter = () => {
    return this.router
  }
}
