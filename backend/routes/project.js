const express = require('express')
const router = express.Router()

const {
  createProject,
  allProjects,
  detailedProject,
  updateProject,
  deleteProject,
  attachStage,
  getStagesFullData,
} = require('../controllers/project.controllers')

router.post('/new', createProject)
router.get('/all', allProjects)
router.patch('/edit/:id', updateProject)
router.delete('/delete/:id', deleteProject)
router.patch('/attach/:id', attachStage)
router.get('/:id', detailedProject)
router.get('/stages/:id', getStagesFullData)

module.exports = router
