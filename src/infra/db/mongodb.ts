import { Database } from '@/infra/contracts'
import env from '@/main/config/env'
import { createConnection } from 'typeorm'

export class MongoDatabase implements Database {
  connect() {
    return createConnection({
      type: 'mongodb',
      url: env.databases.mongodb.url,
      database: env.databases.mongodb.database,
      authSource: 'admin',
      entities: [__dirname + '/../entities/*-entity{.ts,.js}'],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  }
}
