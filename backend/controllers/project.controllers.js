const Project = require('../models/Project')

exports.createProject = async (req, res) => {
  const { projectName, projectDescription, projectOwner } = req.body
  // console.log(req.user)
  // const owner = req.user._id
  const project = await Project.create({
    projectName,
    projectDescription,
    projectOwner,
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
  const { projectName, projectDescription, projectOwner, projectStages } = req.body

  const project = await Project.findByIdAndUpdate(
    id,
    {
      projectName,
      projectDescription,
      projectOwner,
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

exports.attachStage = async (req, res) => {
  const { id } = req.params
  const { projectName, projectDescription, projectOwner, projectStages } = req.body
  const project = await Project.findByIdAndUpdate(
    id,
    {
      projectName,
      projectDescription,
      projectOwner,
      $push: { projectStages: projectStages },
    },
    { new: true }
  )

  res.status(200).json(project)
}

exports.getStagesFullData = async (req, res) => {
  const { id } = req.params
  const projectStages = await Project.findById(id).populate('projectStages')
  console.log(projectStages.projectStages)

  res.status(200).json(projectStages.projectStages)
}
