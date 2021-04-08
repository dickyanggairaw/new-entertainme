const express = require('express')
const router = express.Router()
const movieRouter = require('./movieRoute')
const tvSerieRouter = require('./tvSeriesRoute')

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hallo Dunia"
  })
})

router.use('/movies', movieRouter)
router.use('/tvseries', tvSerieRouter)

module.exports = router