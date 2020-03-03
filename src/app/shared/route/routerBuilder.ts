import { Router } from 'express'
import { RouteCallback } from './routeCallback'
import routeExecuter from './routeExecuter'

export default class RouterBuilder {
  private router = Router()
  get = (path: string, cb: RouteCallback) => {
    this.router.get(path, routeExecuter(cb))
  }
  post = (path: string, cb: RouteCallback) => {
    this.router.post(path, routeExecuter(cb))
  }
  put = (path: string, cb: RouteCallback) => {
    this.router.put(path, routeExecuter(cb))
  }
  patch = (path: string, cb: RouteCallback) => {
    this.router.patch(path, routeExecuter(cb))
  }
  delete = (path: string, cb: RouteCallback) => {
    this.router.delete(path, routeExecuter(cb))
  }
  getRouter = () => {
    return this.router
  }
}
