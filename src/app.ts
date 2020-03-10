import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import getRouters from './routes'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import { addRequestId } from './shared/logger/request-execution-details'
import { config } from './config'
import * as swagger from './swagger.json'

const app = express()
app.use(cors())
app.use(json())
app.use(cookieParser())
app.use(addRequestId)

const swaggerDoc = swagger
getRouters().forEach(router => {
  console.log({ path: router[0] })
  app.use(router[0], router[1].getRouter())
  const routeSwagger = router[1].getSwagger()
  swaggerDoc.paths = { ...swaggerDoc.paths, ...routeSwagger.paths }
  swaggerDoc.definitions = { ...swaggerDoc.definitions, ...routeSwagger.definitions }
})

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(3000, () => console.log({ serverId: config.serverId, startTime: new Date() }))
