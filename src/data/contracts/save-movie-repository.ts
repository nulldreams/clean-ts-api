import { MovieModel } from '@/data/models/movie'

export interface SaveMovieRepository {
  save: (movie: MovieModel) => Promise<boolean>
}
