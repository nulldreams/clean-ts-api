import { Database } from '@/infra/contracts'
import env from '@/main/config/env'
import * as path from 'path'
import { createConnection } from 'typeorm'
import { PostgresSeed } from './seeds'

export class PostgresDatabase implements Database {
  async connect() {
    const seeder = new PostgresSeed()
    const database = await createConnection({
      type: 'postgres',
      host: env.databases.postgres.host,
      database: env.databases.postgres.database,
      username: env.databases.postgres.user,
      password: env.databases.postgres.password,
      port: +env.databases.postgres.port,
      synchronize: true,
      entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
    })

    await seeder.run()

    return database
  }
}
