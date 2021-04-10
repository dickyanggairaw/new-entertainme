const TvSerie = require('../models/tvSeries')

class TvSerieController {
  static async getAll (req, res, next) {
    try {
      const tvSeries = await TvSerie.findAll()
      res.status(200).json(tvSeries)
    } catch (error) {
      next(error)
    }
  }
  static async getOne( req, res, next) {
    try {
      const tvSerie = await TvSerie.findOne(req.params.id)
      res.status(200).json(tvSerie)
    } catch (error) {
      next(error)
    }
  }
  static async createTvSerie( req, res, next) {
    try {
      const data = req.body
      const tvSerie = await TvSerie.create(data)
      res.status(201).json(tvSerie.ops)
    } catch (error) {
      next(error)
    }
  }
  static async deleteTvSerie (req, res, next) {
    try {
      const data = await TvSerie.destroy(req.params.id)
      res.status(200).json({
        message: "Success delete TvSerie"
      })
    } catch (error) {
      next(error)
    }
  }
  static async updateTvSerie (req, res, next) {
    try {
      const tvSerie = await TvSerie.update({
        id: req.params.id,
        data: req.body
      })
      res.status(200).json(tvSerie)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TvSerieController