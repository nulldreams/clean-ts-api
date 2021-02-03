import { MovieModel } from '@/data/models/movie'

export interface FindMovieByIdRepository {
  findById: (movieId: string) => Promise<MovieModel>
}
