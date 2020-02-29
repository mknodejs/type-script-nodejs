import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import setRoutes from './routes'

const app = express()
app.use(cors())
app.use(json())
app.get('/', function(req, res) {
  res.send('hello world')
})
setRoutes(app)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(3000, () => console.log(`App listening on port ${3000}!`))
