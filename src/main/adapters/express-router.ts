import { Controller } from '@/presentation/contracts'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {}),
    }

    const httpResponse = await controller.handle(request)

    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
