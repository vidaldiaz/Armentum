const express = require('express')
const router = express.Router()

const { createStage } = require('../controllers/stage.controllers')

router.post('/new', createStage)
