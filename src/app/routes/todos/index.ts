import { getTodos } from './getTodos'
import { Router } from 'express'

const todoRouter = Router()
todoRouter.get('/', getTodos)

export default todoRouter
