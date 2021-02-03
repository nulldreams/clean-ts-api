import { FindMovieByIdRepository } from '@/data/contracts'
import { MovieModel } from '@/data/models'
import { EmptyParamError } from '@/domain/errors'
import { FindMovieById } from '@/domain/usecases'

export class FindMovieByIdService implements FindMovieById {
  constructor(private readonly findByIdRepository: FindMovieByIdRepository) {}

  findById(movieId: string): Promise<MovieModel> {
    if (!movieId) throw new EmptyParamError('movieId')

    return this.findByIdRepository.findById(movieId)
  }
}
