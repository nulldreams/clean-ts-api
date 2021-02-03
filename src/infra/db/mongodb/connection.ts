import { Database } from '@/infra/contracts'
import { MongoSeed } from '@/infra/db/mongodb/seeds'
import env from '@/main/config/env'
import * as path from 'path'
import { createConnection } from 'typeorm'

export class MongoDatabase implements Database {
  async connect() {
    const seeder = new MongoSeed()
    const database = await createConnection({
      type: 'mongodb',
      url: env.databases.mongodb.url,
      database: env.databases.mongodb.database,
      authSource: 'admin',
      entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    await seeder.run()

    return database
  }
}
