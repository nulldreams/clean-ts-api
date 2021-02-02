import { MigrationInterface, QueryRunner } from 'typeorm'
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner'

export class SeedMongoData1612304642981 implements MigrationInterface {
  public async up(queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.insertOne('movies', {
      imdbId: 'tt0133093',
      genre: ['cyberpunk'],
      name: 'The Matrix',
      poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      releaseDate: '1992-03-30T03:00:00.000Z',
      sinopsis:
        'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
