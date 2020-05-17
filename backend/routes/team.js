const express = require('express')
const router = express.Router()

const {
  createTeam,
  allTeams,
  detailedTeam,
  updateTeam,
  deleteTeam,
} = require('../controllers/team.controllers')

router.post('/new', createTeam)
router.get('/all', allTeams)
router.patch('/edit/:id', updateTeam)
router.get('/:id', detailedTeam)
router.delete('/delete/:id', deleteTeam)

module.exports = router
