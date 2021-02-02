export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const errorResponse = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
})

export const successResponse = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})
