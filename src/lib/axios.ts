import axios from 'axios'

export const apiMethod = axios.create({
  baseURL: '/api',
})
