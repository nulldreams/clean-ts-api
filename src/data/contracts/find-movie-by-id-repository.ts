import { MovieModel } from '../models/movie'

export interface FindMovieByIdRepository {
  findById: (movieId: string) => Promise<MovieModel>
}
