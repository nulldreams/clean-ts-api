import { FindMovieByIdRepository } from '@/data/contracts/find-movie-by-id-repository'
import { MovieModel } from '@/data/models'
import { TheMovieDatabase } from '@/infra/apis'

export class MovieDbRepository implements FindMovieByIdRepository {
  async findById(movieId: string): Promise<MovieModel> {
    const theMovieDatabase = new TheMovieDatabase()
    const {
      movie_results: [movie],
    } = await theMovieDatabase.findMovieByImdbId(movieId)
    const genres = await theMovieDatabase.findGenres()
    const genresNames = genres.filter((genre) => movie.genre_ids.includes(genre.id))

    return {
      name: movie.original_title,
      genre: genresNames.map((genre) => genre.name),
      poster: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
      sinopsis: movie.overview,
      releaseDate: movie.release_date,
    }
  }
}
