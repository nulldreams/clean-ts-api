import env from '@/main/config/env'
import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: env.theMoviedbApiKey,
    language: 'en-US',
    external_source: 'imdb_id',
  },
})

interface FindMovieResponse {
  movie_results: MovieInfo[]
  person_results: []
  tv_results: []
  tv_episode_results: []
  tv_season_results: []
}

interface MovieInfo {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  vote_count: number
  original_language: string
  original_title: string
  poster_path: string
  title: string
  video: boolean
  vote_average: number
  release_date: string
  overview: string
  id: number
  popularity: number
}

interface GenresResponse {
  genres: Genre[]
}

interface Genre {
  id: number
  name: string
}

export class TheMovieDatabase {
  async findMovieByImdbId(movieImdbId: string): Promise<FindMovieResponse> {
    return apiInstance
      .get(`find/${movieImdbId}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error)
      })
  }

  async findGenres(): Promise<Genre[]> {
    return apiInstance
      .get('genre/movie/list')
      .then((response) => response.data.genres)
      .catch((error) => {
        throw new Error(error)
      })
  }
}
