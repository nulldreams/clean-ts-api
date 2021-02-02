import * as dotenv from 'dotenv'

dotenv.config({ path: `.${process.env.NODE_ENV}.env` })

export default {
  port: process.env.PORT || 3000,
  theMoviedbApiKey: process.env.THE_MOVIEDB_API_KEY,
  databases: {
    postgre: {
      host: process.env.POSTGRE_HOST,
      user: process.env.POSTGRE_USER,
      password: process.env.POSTGRE_PASSWORD,
      port: process.env.POSTGRE_PORT,
      database: process.env.POSTGRE_DATABASE,
    },
    mongodb: {
      url: process.env.MONGODB_URL,
      database: process.env.MONGODB_DATABASE,
    },
  },
}
