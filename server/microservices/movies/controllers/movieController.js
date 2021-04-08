const Movie = require('../models/movie')

class MovieController {
  static async getAll (req, res, next) {
    try {
      const movies = await Movie.findAll()
      res.status(200).json(movies)
    } catch (error) {
      next(error)
    }
  }
  static async getOne( req, res, next) {
    try {
      const movie = await Movie.findOne(req.params.id)
      res.status(200).json(movie)
    } catch (error) {
      next(error)
    }
  }
  static async createMovie( req, res, next) {
    try {
      const data = req.body
      const movie = await Movie.create(data)
      res.status(201).json(movie.ops)
    } catch (error) {
      next(error)
    }
  }
  static async deleteMovie (req, res, next) {
    try {
      const data = await Movie.destroy(req.params.id)
      res.status(200).json({
        message: "Success delete Movie"
      })
    } catch (error) {
      next(error)
    }
  }
  static async updateMovie (req, res, next) {
    try {
      const movie = await Movie.update({
        id: req.params.id,
        data: req.body
      })
      res.status(200).json(movie)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = MovieController