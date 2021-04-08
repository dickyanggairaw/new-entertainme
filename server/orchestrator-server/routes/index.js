const { response } = require('express')
const express = require('express')
const router = express.Router()
const movieRoute = require('./movieRoute')
const tvSeriesRoute = require('./seriesRoute')
router.get('/', (req, res) => {
  res.send('halllloooooooo')
})

router.use('/movies', movieRoute)
router.use('/tvseries', tvSeriesRoute)

module.exports = router