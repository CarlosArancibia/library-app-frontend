import axios from 'axios'

const libraryApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

libraryApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token && config.headers) {
    const bearerToken = `Bearer ${token}`

    if (typeof config.headers.set === 'function') {
      config.headers.set('Authorization', bearerToken)
    } else {
      config.headers['Authorization'] = bearerToken
    }
  }

  return config
})

export default libraryApi
