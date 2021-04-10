const express = require('express')
const router = express.Router()
const tvSerieRouter = require('./tvSeriesRoute')

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hallo Dunia"
  })
})

router.use('/tvseries', tvSerieRouter)

module.exports = router