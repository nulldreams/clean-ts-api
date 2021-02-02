import express from 'express'
import setupRoutes from './setup-routes'

export const expressApp = async () => {
  const expressServerApp = express()

  setupRoutes(expressServerApp)

  return expressServerApp
}
