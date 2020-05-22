import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost/3000/team',
})

const TEAM_SERVICE = {
  newTeam: async (data) => {
    return await service.post('/new', data)
  },
  allTeams: async () => {
    return await service.get('/all')
  },
  updateTeam: async (id, data) => {
    return await service.patch(`/edit/${id}`, data)
  },
  oneTeam: async (id) => {
    return await service.get(`/${id}`)
  },
  deleteTeam: async (id) => {
    return await service.delete(`/delete/${id}`)
  },
}
