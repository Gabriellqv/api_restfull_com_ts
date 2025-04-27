import config from 'config'
import mongoose from 'mongoose'
import Logger from './logger'

async function connect() {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
    Logger.info('MongoDB connected successfully')
  } catch (error) {
    Logger.error(`MongoDB connection error: ${error}`)
    process.exit(1)
  }
}

export default connect
