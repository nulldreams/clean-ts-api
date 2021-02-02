import { Controller } from '@/presentation/contracts'

export const adaptNestJSResolver = async (controller: Controller, params: any): Promise<any> => {
  const httpResponse = await controller.handle(params)
  return httpResponse.data
}
