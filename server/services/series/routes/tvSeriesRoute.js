const express = require('express')
const router = express.Router()
const TvSerieController = require('../controllers/tvSerieController')

router.get('/', TvSerieController.getAll)
router.get('/:id', TvSerieController.getOne)
router.post('/', TvSerieController.createTvSerie)
router.put('/:id', TvSerieController.updateTvSerie)
router.delete('/:id', TvSerieController.deleteTvSerie)

module.exports = router