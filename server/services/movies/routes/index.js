const express = require('express')
const router = express.Router()
const movieRouter = require('./movieRoute')

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hallo Dunia"
  })
})

router.use('/movies', movieRouter)

module.exports = router