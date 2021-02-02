import { Database } from '@/infra/contracts'
import env from '@/main/config/env'
import * as path from 'path'
import { createConnection } from 'typeorm'

export class PostgreDatabase implements Database {
  connect() {
    console.log('using postgres')

    return createConnection({
      type: 'postgres',
      host: env.databases.postgre.host,
      database: env.databases.postgre.database,
      username: env.databases.postgre.user,
      password: env.databases.postgre.password,
      port: +env.databases.postgre.port,
      synchronize: true,
      entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
      migrations: [path.resolve(__dirname, './migrations/*.migration{.ts,.js}')],
      migrationsRun: true,
      cli: {
        migrationsDir: 'src/infra/db/postgre/migrations',
      },
    })
  }
}
