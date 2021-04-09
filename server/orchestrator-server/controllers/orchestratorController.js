const Orchestrator = require('../models/orchestrator')
const Redis = require('ioredis')
const redis = new Redis()

class OrchestratorController {
  static async getAll (req, res, next) {
    try {
      const redist = await redis.get("entertainMe")
      if(redist) {
        res.status(200).json(JSON.parse(redist))
      }else {
        const response = await Orchestrator.findAll()
        const data = {
          movies: response[0].data,
          tvSeries: response[1].data
        }
        await redis.set("entertainMe", JSON.stringify(data))
        res.status(200).json(data)
      }
            
    } catch (error) {
      next(error)
    }
  }
}

module.exports = OrchestratorController