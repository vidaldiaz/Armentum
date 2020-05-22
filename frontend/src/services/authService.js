import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/auth',
  withCredentials: true,
})

const AUTH_SERVICE = {
  login: async (data) => {
    return await service.post('/login', data)
  },
  signup: async (data) => {
    return await service.post('/signup', data)
  },
  logout: async () => {
    return await service.get('/logout')
  },
  loggedUser: async () => {
    return await service.get('/currentUser')
  },
}

export default AUTH_SERVICE
