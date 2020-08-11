import express from 'express'
import cors from 'cors'
import { port } from '@proffy/dotenv'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port)
