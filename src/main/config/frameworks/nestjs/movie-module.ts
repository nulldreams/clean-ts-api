import { MoviesController } from '@/main/routes/nestjs'
import { Module } from '@nestjs/common'

@Module({
  controllers: [MoviesController],
})
export class MoviesModule {}
