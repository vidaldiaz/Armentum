import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/user',
})

const USER_SERVICE = {
  allUsers: async () => {
    return await service.get('/all')
  },
  updateUser: async (id, data) => {
    return await service.patch(`/edit/${id}`, data)
  },
  detailedUser: async (id) => {
    return await service.get(`/${id}`)
  },
  deleteUser: async (id) => {
    return await service.delete(`delete/${id}`)
  },
}

export default USER_SERVICE
