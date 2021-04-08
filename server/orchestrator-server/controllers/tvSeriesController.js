const TvSerie = require('../models/tvSeries')
const Redis = require('ioredis')
const redis = new Redis()

class TvSerieController {
  static async getAll (req, res, next) {
    try {
      const redist = await redis.get("tvseries")
      if(redist) {
        res.status(200).json(JSON.parse(redist))
      }else{
        const response = await TvSerie.findAll()
        await redis.set("tvseries", JSON.stringify(response.data))
        res.status(200).json(response.data)
      }
    } catch (error) {
      next(error)
    } 
  }
  static async getOne (req, res, next) {
    try {
      const response = await TvSerie.findOne(req.params.id)
      res.status(200).json(response.data)
    } catch (error) {
      next(error)
    }
  }
  static async createTvSerie (req, res, next) {
    try {
      await redis.del("tvseries")
      const response = await TvSerie.create(req.body)
      res.status(201).json(response.data)
    } catch (error) {
      next(error)
    }
  }
  static async deleteTvSerie (req, res, next) {
    try {
      await redis.del("tvseries")
      const response = await TvSerie.destroy(req.params.id)
      res.status(200).json({message: "Success delete Tv Serie"})
    } catch (error) {
      next(error)
    }
  }
  static async updateTvSerie (req, res, next) {
    try {
      await redis.del("tvseries")
      const response = await TvSerie.update(req.params.id, req.body)
      res.status(200).json(response.data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TvSerieController