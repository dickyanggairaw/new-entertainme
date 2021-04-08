const Movie = require('../models/movie')
const Redis = require('ioredis')
const redis = new Redis()

class MovieController {
  static async getAll (req, res, next) {
    try {
      const redist = await redis.get("movies")
      if(redist) {
        res.status(200).json(JSON.parse(redist))
      }else{
        const response = await Movie.findAll()
        await redis.set("movies", JSON.stringify(response.data))
        res.status(200).json(response.data)
      }
    } catch (error) {
      next(error)
    } 
  }
  static async getOne (req, res, next) {
    try {
      const response = await Movie.findOne(req.params.id)
      res.status(200).json(response.data)
    } catch (error) {
      next(error)
    }
  }
  static async createMovie (req, res, next) {
    try {
      await redis.del("movies")
      const response = await Movie.create(req.body)
      res.status(201).json(response.data)
    } catch (error) {
      next(error)
    }
  }
  static async deleteMovie (req, res, next) {
    try {
      await redis.del("movies")
      const response = await Movie.destroy(req.params.id)
      res.status(200).json({message: "Success delete movie"})
    } catch (error) {
      next(error)
    }
  }
  static async updateMovie (req, res, next) {
    try {
      await redis.del("movies")
      const response = await Movie.update(req.params.id, req.body)
      res.status(200).json(response.data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = MovieController