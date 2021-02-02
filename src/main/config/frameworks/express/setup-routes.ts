import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(`${__dirname}/../../routes/express`).map(async (file) => {
    if (!file.endsWith('.map')) {
      const route = await import(`../../routes/express/${file}`)
      route.default(router)
    }
  })
}
