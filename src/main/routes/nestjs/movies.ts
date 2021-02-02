import { PostgresMoviesRepository } from '@/infra/db/repositories'
import { adaptNestJSResolver } from '@/main/adapters/nestjs-router'
import { findMovieByIdController } from '@/main/factories'
import { Controller, Get, Param } from '@nestjs/common'

@Controller('movies')
export class MoviesController {
  @Get(':movieId')
  findCart(@Param('movieId') movieId: string) {
    const repository = new PostgresMoviesRepository()

    return adaptNestJSResolver(findMovieByIdController(repository), { movieId })
  }
}
