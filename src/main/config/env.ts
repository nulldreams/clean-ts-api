import * as dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT || 3000,
  currentDatabase: process.env.CURRENT_DATABASE,
  currentFramework: process.env.CURRENT_FRAMEWORK,
  databases: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DATABASE,
    },
    mongodb: {
      url: process.env.MONGODB_URL,
      database: process.env.MONGODB_DATABASE,
    },
  },
}
