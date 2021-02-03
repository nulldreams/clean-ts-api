import { Seeder } from '@/infra/contracts'
import { PostgresMoviesEntity } from '@/infra/db/entities'
import { getConnection, getRepository } from 'typeorm'

export class PostgresSeed implements Seeder {
  async hasTable() {
    return getConnection().query(`
    SELECT EXISTS (
      SELECT FROM pg_tables
      WHERE  schemaname = 'public'
      AND    tablename  = 'movies'
    );
  `)
  }

  async run() {
    const tableExists = await this.hasTable()

    if (!tableExists) {
      await getConnection().query(`
        CREATE TABLE movies (
          id integer,
          id_imdb varchar(255),
          nome varchar(255),
          genero varchar(255),
          descricao varchar(255),
          lancamento date,
          poster varchar(255)
        );
      `)
    }

    await getRepository(PostgresMoviesEntity).save({
      id: 1,
      id_imdb: 'tt0133093',
      nome: 'The Matrix',
      genero: 'cyberpunk',
      descricao:
        'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
      lancamento: new Date('1992-03-30'),
      poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    })
  }
}
