import { Request } from 'express'
import { IResponse } from '../response/response'

export type RouteCallback = (req: Request) => Promise<IResponse>
