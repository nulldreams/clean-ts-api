import { MongoDatabase } from '@/infra/db'
import env from '@/main/config/env'
import { nestApp } from '@/main/config/frameworks'

const startServer = async () => {
  const database = new MongoDatabase()
  const app = await nestApp()

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
