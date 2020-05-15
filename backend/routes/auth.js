const router = require('express').Router()
const { catchErrors, isLogged } = require('../middlewares/catchErrors')
const { signup, login, currentUser, logout } = require('../controllers/auth.controller')

router.post('/signup', catchErrors(signup))
router.post('/login', login)
router.get('/currentUser', isLogged, currentUser)
router.get('/logout', logout)

module.exports = router
