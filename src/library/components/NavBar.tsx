import useAuthStore from '../../store/useAuthStore'

export const Navbar = () => {
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)

  const onLogout = () => {
    logout()
  }

  return (
    <nav className='col-span-12 bg-[#181818] border border-[#444] rounded-2xl py-3 px-8 flex justify-between items-center'>
      <h1 className='font-bold text-xl'>LibraryApp</h1>
      <div className='flex gap-4'>
        <h2>{user?.username}</h2>
        <button className='cursor-pointer' onClick={onLogout}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5 text-red-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
