const express = require('express')
const router = express.Router()
const {
  createProject,
  allProjects,
  detailedProject,
  updateProject,
  deleteProject,
} = require('../controllers/project.controllers')

router.post('/new', createProject)
router.get('/all', allProjects)
router.patch('/edit/:id', updateProject)
router.delete('/delete/:id', deleteProject)
router.get('/:id', detailedProject)

module.exports = router
