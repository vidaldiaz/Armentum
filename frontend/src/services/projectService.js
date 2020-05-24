import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/project',
})

const PROJECT_SERVICE = {
  newProject: async (data) => {
    return await service.post('/new', data)
  },
  getAllProjects: async () => {
    return await service.get('/all')
  },
  editProject: async (id, data) => {
    return await service.patch(`/edit/${id}`, data)
  },
  attachStage: async (id, data) => {
    return await service.patch(`/attach/${id}`, data)
  },
  deleteProject: async (id) => {
    return await service.delete(`/delete/${id}`)
  },
  getOneProject: async (id) => {
    return await service.get(`/${id}`)
  },
  getStagesFullData: async (id) => {
    return await service.get(`/stages/${id}`)
  },
}

export default PROJECT_SERVICE
