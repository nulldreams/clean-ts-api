import { PostgreDatabase } from '@/infra/db'
import env from '@/main/config/env'
import { expressApp } from './config/frameworks/express'

const startServer = async () => {
  const database = new PostgreDatabase()
  const app = await expressApp()

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
