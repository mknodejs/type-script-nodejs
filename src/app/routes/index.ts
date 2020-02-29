import { Application } from 'express'
import todoRouter from './todos'

const setRoutes = (app: Application) => {
  app.use('/todos', todoRouter)
}

export default setRoutes
