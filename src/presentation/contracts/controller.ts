import { HttpResponse } from '@/presentation/contracts'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
