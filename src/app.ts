// ENV variables
require('dotenv').config()

import config from 'config'
import express from 'express'

const app = express()

// JSON middleware
app.use(express.json())

// DB
import db from '../config/db'

// Routes
import router from './router'

// Logger
import Logger from '../config/logger'

// Middleware
import morganMiddleware from './middleware/morganMiddleware'

app.use(morganMiddleware)

app.use('/api/', router)

// app port
const port = config.get<number>('port')

app.listen(port, async () => {
  await db()
  Logger.info(`Server is running on port ${port}`)
})
