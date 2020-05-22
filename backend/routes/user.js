const express = require('express')
const router = express.Router()

const {
  allUsers,
  detailedUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controllers')

router.get('/all', allUsers)
router.patch('/edit/:id', updateUser)
router.get('/:id', detailedUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
