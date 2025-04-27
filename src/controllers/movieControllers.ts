import type { Request, Response } from 'express'

// Model
import { MovieModel } from '../models/Movie'

// Logger
import Logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    return res.status(201).json(movie)
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' })
    }
    return res.status(200).json(movie)
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find()
    return res.status(200).json(movies)
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findByIdAndDelete(id)
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' })
    }
    await movie.delete()
    return res.status(200).json({ message: 'Movie deleted successfully' })
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const data = req.body
    const movie = await MovieModel.findByIdAndUpdate(id)
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' })
    }
    await MovieModel.updateOne({ _id: id }, data)
    return res.status(200).json({ movie })
  } catch (e: any) {
    Logger.error(`System error: $e.message`)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
