import { PostgresMoviesRepository } from '@/infra/db/repositories'
import { adaptRoute } from '@/main/adapters'
import { findMovieByIdController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  const repository = new PostgresMoviesRepository()
  router.get('/movies/:movieId', adaptRoute(findMovieByIdController(repository)))
}
