const Orchestrator = require('../models/orchestrator')

class OrchestratorController {
  static async getAll (req, res, next) {
    try {
      const response = await Orchestrator.findAll()
      console.log(response)
      res.status(200).json({
        movies: response[0].data,
        tvSeries: response[1].data
      })      
    } catch (error) {
      next(error)
    }
  }
}

module.exports = OrchestratorController