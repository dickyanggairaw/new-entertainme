const { response } = require('express')
const express = require('express')
const router = express.Router()
const movieRoute = require('./movieRoute')
const tvSeriesRoute = require('./seriesRoute')
const OrchestratorController = require('../controllers/orchestratorController')

router.get('/entertainme', OrchestratorController.getAll)

router.use('/movies', movieRoute)
router.use('/tvseries', tvSeriesRoute)

module.exports = router