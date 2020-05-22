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

//Test with frontend to know if we can get the userid
exports.allProjects = async (req, res) => {
  const projects = await Project.find()
  res.status(200).json({ projects })
}

exports.detailedProject = async (req, res) => {
  const { id } = req.params
  const project = await Project.findById(id)
  res.status(200).json({ project })
}

exports.updateProject = async (req, res) => {
  const { id } = req.params
  const { projectName, projectDescription, projectStages } = req.body

  const project = await Project.findByIdAndUpdate(
    id,
    {
      projectName,
      projectDescription,
      projectStages,
    },
    { new: true }
  )
  res.status(200).json(project)
}

exports.deleteProject = async (req, res) => {
  const { id } = req.params
  await Project.findByIdAndDelete(id)

  res.status(200).json({ message: 'The project has been deleted' })
}
