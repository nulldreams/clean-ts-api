import { MovieModel } from '@/data/models'
import { FindMovieById } from '@/domain/usecases/find-movie-by-id'
import { FindMovieByIdRepository } from '../contracts/find-movie-by-id-repository'

export class FindMovieByIdService implements FindMovieById {
  constructor(private readonly findByIdRepository: FindMovieByIdRepository) {}

  findById(movieId: string): Promise<MovieModel> {
    return this.findByIdRepository.findById(movieId)
  }
}
