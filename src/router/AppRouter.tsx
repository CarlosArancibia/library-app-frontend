import { Navigate, Route, Routes } from 'react-router'
import { BookRoute } from '../library/routes/BookRoute'
import { AuthRoute } from '../auth/routes/AuthRoute'
import useAuthStore from '../store/useAuthStore'
import { Loader } from '../components/Loader'
import { useEffect } from 'react'

export const AppRouter = () => {
  const status = useAuthStore((state) => state.status)
  const checking = useAuthStore((state) => state.checking)

  useEffect(() => {
    checking()
  }, [checking])

  if (status === 'checking') return <Loader styles='h-screen' />

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<BookRoute />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoute />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
