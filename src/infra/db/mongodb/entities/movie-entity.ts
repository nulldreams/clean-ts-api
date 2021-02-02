import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('movies')
export class MongoMoviesEntity {
  @ObjectIdColumn() id: ObjectID
  @Column() imdbId: string
  @Column() poster: string
  @Column() name: string
  @Column() sinopsis: string
  @Column() genre: string[]
  @Column() releaseDate: string
}
