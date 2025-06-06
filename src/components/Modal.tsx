import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  const [shouldRender, setShouldRender] = useState(isOpen)
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setAnimateOut(false)
    } else {
      setAnimateOut(true)
      const timeout = setTimeout(() => {
        setShouldRender(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  if (!shouldRender) return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(
    <section
      className={`bg-[#111]/80 fixed inset-0 h-screen flex justify-center items-center animate__animated ${
        animateOut ? 'animate__fadeOut' : 'animate__fadeIn'
      }`}
    >
      <div className='bg-[#181818] border border-[#444] rounded-2xl p-8 min-w-md relative'>
        <button
          onClick={onClose}
          className='bg-[#111] rounded-full w-8 h-8 flex justify-center items-center border border-gray-400 absolute -right-3 -top-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 cursor-pointer'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </button>
        {children}
      </div>
    </section>,
    modalRoot
  )
}
