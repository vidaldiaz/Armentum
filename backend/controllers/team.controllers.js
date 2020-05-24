const Team = require('../models/Team')

exports.createTeam = async (req, res) => {
  const { teamName, teamDescription } = req.body
  const team = await Team.create({ teamName, teamDescription })

  res.status(201).json({ team })
}

exports.allTeams = async (req, res) => {
  const teams = await Team.find()

  res.status(201).json({ teams })
}

exports.detailedTeam = async (req, res) => {
  const { id } = req.params
  const team = await Team.findById(id)

  res.status(201).json({ team })
}

exports.updateTeam = async (req, res) => {
  const { id } = req.params
  const { teamName, teamDescription, teamMembers } = req.body
  const team = await Team.findByIdAndUpdate(
    id,
    {
      $set: { teamName, teamDescription, teamMembers },
    },
    { new: true }
  )

  res.status(201).json({ team })
}

exports.deleteTeam = async (req, res) => {
  const { id } = req.params
  await Team.findByIdAndDelete(id)

  res.status(201).json({ message: 'The team has been deleted' })
}
