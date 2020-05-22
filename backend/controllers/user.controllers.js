const User = require('../models/User')

exports.allUsers = async (req, res) => {
  const users = await User.find()

  res.status(201).json({ users })
}

exports.updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, role, projects, teams } = req.body
  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: { name, email, role, projects, teams },
    },
    { new: true }
  )
  res.status(201).json({ user })
}

exports.detailedUser = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)

  res.status(201).json({ user })
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params
  await User.findByIdAndRemove(id)

  res.status(201).json({ message: 'The user has been deleted' })
}
