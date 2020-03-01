import { getTodos } from './get-todos'
import { Router } from 'express'

const todoRouter = Router()
todoRouter.get('/', getTodos)

export default todoRouter
