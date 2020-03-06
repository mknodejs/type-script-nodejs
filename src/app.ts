import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import getRouters from './routes'
import cookieParser from 'cookie-parser'
import { addRequestId } from './shared/logger/search-keys'
const app = express()
app.use(cors())
app.use(json())
app.use(cookieParser())
app.use(addRequestId)

getRouters().forEach(router => {
  console.log({ path: router[0] })
  app.use(router[0], router[1].getRouter())
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(3000, () => console.log(`App listening on port ${3000}!`))
