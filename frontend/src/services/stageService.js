import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/stage',
})

const STAGE_SERVICE = {
  newStage: async (data) => {
    return await service.post('/new', data)
  },
  allStages: async () => {
    return await service.get('/all')
  },
  oneStage: async (id) => {
    return await service.get(`/${id}`)
  },
  editStage: async (id, data) => {
    return await service.patch(`/edit/${id}`, data)
  },
  deleteStage: async (id) => {
    return await service.delete(`/delete/${id}`)
  },
}

export default STAGE_SERVICE
