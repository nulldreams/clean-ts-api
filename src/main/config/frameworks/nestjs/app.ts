import { MoviesModule } from '@/main/config/frameworks/nestjs/movie-module'
import { Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

@Module({
  imports: [MoviesModule],
})
class AppModule {}

export const NestApp = NestFactory.create(AppModule)
