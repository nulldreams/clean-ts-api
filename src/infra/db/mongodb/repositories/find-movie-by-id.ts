import { FindMovieByIdRepository } from '@/data/contracts'
import { MovieModel } from '@/data/models'
import { MongoMoviesEntity } from '@/infra/db/entities'
import { getManager } from 'typeorm'

export class MongoMoviesRepository implements FindMovieByIdRepository {
  async findById(movieId: string): Promise<MovieModel> {
    const repository = getManager().getRepository(MongoMoviesEntity)
    const movie = await repository.findOne({ where: { imdbId: movieId } })

    return {
      genre: movie.genre,
      name: movie.name,
      poster: movie.poster,
      releaseDate: new Date(movie.releaseDate),
      sinopsis: movie.sinopsis,
    }
  }
}
