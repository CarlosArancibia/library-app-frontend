import { Navigate, Route, Routes } from 'react-router'
import { BookPage } from '../pages/BookPage'

export const BookRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<BookPage />} />
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
