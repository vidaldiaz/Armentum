const Stage = require('../models/Stage')

exports.createStage = async (req, res) => {
  const { stageName, stageTeams } = req.body

  const stage = await Stage.create({
    stageName,
    stageTeams,
  })

  res.status(201).json({ stage })
}

exports.allStages = async (req, res) => {
  const stages = await Stage.find()

  res.status(201).json({ stages })
}

exports.detailedStage = async (req, res) => {
  const { id } = req.params
  const project = await Stage.findById(id)

  res.status(201).json({ project })
}

exports.updateStage = async (req, res) => {
  const { id } = req.params
  const { stageName, stageTeams } = req.body
  const stage = await Stage.findByIdAndUpdate(
    id,
    {
      $set: { stageName, stageTeams },
    },
    { new: true }
  )

  res.status(201).json(stage)
}

exports.deleteStage = async (req, res) => {
  const { id } = req.params
  await Stage.findByIdAndDelete(id)

  res.status(201).json({ message: 'The stage has been deleted' })
}
