import { FindMovieByIdRepository } from '@/data/contracts'
import { MovieModel } from '@/data/models'
import { PostgreMoviesEntity } from '@/infra/db/entities'
import { getManager } from 'typeorm'

export class PostgresMoviesRepository implements FindMovieByIdRepository {
  async findById(movieId: string): Promise<MovieModel> {
    const repository = getManager().getRepository(PostgreMoviesEntity)
    const movie = await repository.findOne({ where: { id_imdb: movieId } })

    return {
      genre: [movie.genero],
      name: movie.nome,
      poster: movie.poster,
      releaseDate: new Date(movie.lancamento),
      sinopsis: movie.descricao,
    }
  }
}
