const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movieController')

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', MovieController.createMovie)
router.delete('/:id', MovieController.deleteMovie)
router.put('/:id', MovieController.updateMovie)

module.exports = router