import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('movies')
export class PostgreMoviesEntity {
  @PrimaryColumn({ type: 'integer' })
  id: number

  @Column({ type: 'character varying' })
  nome: string

  @Column({ type: 'character varying' })
  descricao: string

  @Column({ type: 'character varying' })
  genero: string

  @Column({ type: 'character varying' })
  poster: string

  @Column({ type: 'character varying' })
  lancamento: string

  @Column({ type: 'character varying' })
  id_imdb: string
}
