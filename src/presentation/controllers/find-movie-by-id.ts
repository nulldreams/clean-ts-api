import { FindMovieByIdService } from '@/data/services'
import { Movie } from '@/domain/entities'
import { Controller, errorResponse, HttpResponse, successResponse } from '../contracts'

export class FindMovieByIdController implements Controller {
  constructor(private readonly findMovieById: FindMovieByIdService) {}

  async handle(request: FindMovieByIdController.Request): Promise<HttpResponse<Movie>> {
    try {
      const movie = await this.findMovieById.findById(request.movieId)
      return successResponse(movie)
    } catch (error) {
      return errorResponse(error)
    }
  }
}

export namespace FindMovieByIdController {
  export type Request = {
    movieId: string
  }
}
