import type { ReactNode } from 'react'
import { Navbar } from '../library/components/NavBar'

interface Props {
  children: ReactNode
}

export const BookLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-12 max-w-[1000px] m-auto py-10 gap-5 animate__animated animate__fadeIn'>
      <Navbar />
      {children}
    </div>
  )
}
