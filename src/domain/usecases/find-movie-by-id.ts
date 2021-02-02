import { Movie } from '@/domain/entities'

export interface FindMovieById {
  findById: (movieId: string) => Promise<Movie>
}
