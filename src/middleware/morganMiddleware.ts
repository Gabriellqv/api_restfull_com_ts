import config from 'config'
import morgan, { type StreamOptions } from 'morgan'
import Logger from '../../config/logger'

const stream: StreamOptions = {
  write: message => Logger.http(message),
}

const skip = () => {
  const env = config.get<string>('env') || 'developmen'
  return env !== 'development'
}

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream,
    skip,
  }
)

export default morganMiddleware
