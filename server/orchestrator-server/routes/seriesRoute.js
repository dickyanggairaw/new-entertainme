const express = require('express')
const router = express.Router()
const TvSerieController = require('../controllers/tvSeriesController')

router.get('/', TvSerieController.getAll)
router.get('/:id', TvSerieController.getOne)
router.post('/', TvSerieController.createTvSerie)
router.delete('/:id', TvSerieController.deleteTvSerie)
router.put('/:id', TvSerieController.updateTvSerie)

module.exports = router