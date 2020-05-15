import axios from 'axios'

const baseUrl = 'https://api.github.com/users'

const api = axios.create({
  baseURL: baseUrl
})

export default api