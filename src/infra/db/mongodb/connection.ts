import { Database } from '@/infra/contracts'
import env from '@/main/config/env'
import * as path from 'path'
import { createConnection } from 'typeorm'

export class MongoDatabase implements Database {
  connect() {
    console.log('using mongodb')

    return createConnection({
      type: 'mongodb',
      url: env.databases.mongodb.url,
      database: env.databases.mongodb.database,
      authSource: 'admin',
      entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
      useUnifiedTopology: true,
      useNewUrlParser: true,
      migrations: [path.resolve(__dirname, './migrations/*.migration{.ts,.js}')],
      migrationsRun: true,
      cli: {
        migrationsDir: path.resolve(__dirname, './migrations'),
      },
    })
  }
}
