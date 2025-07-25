import { Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '../pages/LoginPage'

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to={'/auth/login'} />} />
    </Routes>
  )
}
