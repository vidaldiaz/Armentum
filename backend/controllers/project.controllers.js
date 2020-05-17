const Project = require('../models/Project')

exports.createProject = async (req, res) => {
  const { projectName, projectDescription } = req.body
  const owner = req.user.id
  const project = await Project.create({
    projectName,
    projectDescription,
    owner,
    projectStages: [],
  })

  res.status(201).json({ project })
}
