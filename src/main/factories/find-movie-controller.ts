import { FindMovieByIdRepository } from '@/data/contracts/find-movie-by-id-repository'
import { FindMovieByIdService } from '@/data/services'
import { Controller } from '@/presentation/contracts'
import { FindMovieByIdController } from '@/presentation/controllers'

export const findMovieByIdController = (repository: FindMovieByIdRepository): Controller => {
  const findMovieByIdService = new FindMovieByIdService(repository)
  return new FindMovieByIdController(findMovieByIdService)
}
