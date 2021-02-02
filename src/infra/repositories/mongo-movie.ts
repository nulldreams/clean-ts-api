import { FindMovieByIdRepository } from '@/data/contracts/find-movie-by-id-repository'
import { MovieModel } from '@/data/models'
import { MongoMovieEntity } from '@/infra/entities'
import { getManager } from 'typeorm'

export class MongoMovieRepository implements FindMovieByIdRepository {
  async findById(movieId: string): Promise<MovieModel> {
    const repository = getManager().getRepository(MongoMovieEntity)
    console.log(movieId)
    return repository.findOne({ where: { imdbId: movieId } })
  }
}
