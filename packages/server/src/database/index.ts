import knex from 'knex'
import { nodeEnv } from '@proffy/dotenv'

import dbConfig from '../../knexfile'

const config =
  nodeEnv === 'development' ? dbConfig.development : dbConfig.production

const db = knex(config)

export default db
