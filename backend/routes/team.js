const express = require('express')
const router = express.Router()

const {
  createTeam,
  allTeams,
  detailedTeam,
  updateTeam,
  deleteTeam,
  addMember,
  userFullData,
} = require('../controllers/team.controllers')

router.post('/new', createTeam)
router.get('/all', allTeams)
router.patch('/edit/:id', updateTeam)
router.delete('/delete/:id', deleteTeam)
router.get('/users/:id', userFullData)
router.patch('/:id', addMember)
router.get('/:id', detailedTeam)

module.exports = router
