import { MongoDatabase, PostgresDatabase } from '@/infra/db'
import env from '@/main/config/env'

const chooseDatabase = (dbType: string) => {
  if (dbType === 'postgres') return new PostgresDatabase()
  if (dbType === 'mongodb') return new MongoDatabase()
}

const chooseFramework = (frameworkType: string) => {
  if (frameworkType === 'express')
    return import('@/main/config/frameworks/express').then((framework) => framework.expressApp())
  if (frameworkType === 'nestjs')
    return import('@/main/config/frameworks/nestjs').then((framework) => framework.nestApp())
}

const startServer = async () => {
  const database = chooseDatabase(env.currentDatabase)
  const app = await chooseFramework(env.currentFramework)

  database
    .connect()
    .then(async () => {
      await app.listen(env.port, () => console.log(`server running at: http://localhost:${env.port}/api`))
    })
    .catch((error) => {
      console.log(`database connection problem: ${error}`)
    })
}

startServer()
