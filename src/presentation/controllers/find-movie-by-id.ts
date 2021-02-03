import { FindMovieById } from '@/domain/usecases'
import { Controller, errorResponse, HttpResponse, successResponse } from '@/presentation/contracts'
import { MovieViewModel } from '@/presentation/view-models'

export class FindMovieByIdController implements Controller {
  constructor(private readonly findMovieById: FindMovieById) {}

  async handle(request: FindMovieByIdController.Request): Promise<HttpResponse<MovieViewModel>> {
    try {
      const movie = await this.findMovieById.findById(request.movieId)
      return successResponse({
        ...movie,
        releaseDate: movie.releaseDate.toISOString(),
      })
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
