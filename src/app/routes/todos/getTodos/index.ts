import { RequestHandler } from 'express'

import { Todo } from './todo.model'

const TODOS: Todo[] = [{ id: '1', text: 'Test' }]

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS })
}
