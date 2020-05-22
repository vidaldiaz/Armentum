const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true,
    passReqToCallback: true,
  }),
  (req, res) => {
    delete req.user.password
    res.status(200).json({ user: req.user })
  }
)

router.post('/signup', (req, res, next) => {
  const name = req.body.name
  const password = req.body.password
  const email = req.body.email
  if (name === '' || password === '') {
    res.json({ message: 'Indicate username and password' })
    return
  }

  User.findOne({ name }, 'name', (err, user) => {
    if (user !== null) {
      res.json({ message: 'The username already exists' })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      name,
      password: hashPass,
      email,
    })

    newUser
      .save()
      .then(({ name, email, _id }) => {
        res.status(201).json({ name, email, _id })
      })
      .catch((err) => {
        res.json({ message: 'Something went wrong' })
      })
  })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).json({ message: 'Logged Out' })
})

module.exports = router
