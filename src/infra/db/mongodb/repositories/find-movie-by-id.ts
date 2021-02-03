import { FindMovieByIdRepository } from '@/data/contracts'
import { MovieModel } from '@/data/models'
import { MongoMoviesEntity } from '@/infra/db/entities'
import { getManager } from 'typeorm'

export class MongoMoviesRepository implements FindMovieByIdRepository {
  async findById(movieId: string): Promise<MovieModel> {
    const repository = getManager().getRepository(MongoMoviesEntity)
    const { id, imdbId, ...movie } = await repository.findOne({ where: { imdbId: movieId } })

    return {
      ...movie,
      releaseDate: new Date(movie.releaseDate),
    }
  }
}
