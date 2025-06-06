import { create } from 'zustand'
import libraryApi from '../api/requirementApi'

type errorMessage = string | null

export interface User {
  username: string
  password: string
}

interface UserState {
  status: string
  user: User | null
  errorMessage: errorMessage
  login: (user: User) => Promise<void>
  logout: (errorMessage?: errorMessage) => void
  checking: () => Promise<void>
}

const useAuthStore = create<UserState>((set, get) => ({
  status: 'checking',
  user: null,
  errorMessage: null,
  login: async (user: User) => {
    const { data } = await libraryApi.post('auth/login', {
      username: user.username,
      password: user.password,
    })
    localStorage.setItem('token', data.token)
    set({ status: 'authenticated', user, errorMessage: null })
  },
  logout: (errorMessage?: errorMessage) => {
    set({ status: 'not-authenticated', user: null, errorMessage })
  },
  checking: async () => {
    set({ status: 'checking', user: null, errorMessage: null })

    const token = localStorage.getItem('token')
    if (!token) get().logout(null)

    try {
      const { data } = await libraryApi.get('auth/renew')
      localStorage.setItem('token', data.token)
      set({ status: 'authenticated', user: { username: data.username, password: '' }, errorMessage: null })
    } catch (error) {
      console.log(error)
      localStorage.clear()
      get().logout(null)
    }
  },
}))

export default useAuthStore
