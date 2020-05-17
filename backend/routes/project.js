const express = require('express')
const router = express.Router()
const { createProject } = require('../controllers/project.controllers')

router.post('/new', createProject)

module.exports = router
