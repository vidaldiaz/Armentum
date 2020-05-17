const express = require('express')
const router = express.Router()

const {
  createStage,
  allStages,
  detailedStage,
  updateStage,
  deleteStage,
} = require('../controllers/stage.controllers')

router.post('/new', createStage)
router.get('/all', allStages)
router.get('/:id', detailedStage)
router.patch('/edit/:id', updateStage)
router.delete('/delete/:id', deleteStage)

module.exports = router
