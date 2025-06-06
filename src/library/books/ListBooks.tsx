import { useEffect } from 'react'
import { Loader } from '../../components/Loader'
import useBookStore, { type BookWithId } from '../../store/useBookStore'
import useUIStore from '../../store/useUIStore'

// const books = [
//   {
//     id: '295d78f2-1df6-4e2d-b209-0f9d65bee796',
//     title: 'test',
//     author: 'wara',
//     publishYear: 1998,
//     genre: 'action',
//     status: 1,
//   },
//   {
//     id: 'cb44f517-d215-4ae8-963a-dfebefd26d5f',
//     title: 'other',
//     author: 'carlos',
//     publishYear: 1998,
//     genre: 'crime',
//     status: 0,
//   },
//   {
//     id: '9d5cef1a-6db5-48ba-a2a8-9aa60d618db3',
//     title: 'test_3',
//     author: 'eduardo',
//     publishYear: 0,
//     genre: 'romance',
//     status: 0,
//   },
// ]

const isLoadingBooks = false

export const ListBooks = () => {
  const books = useBookStore((state) => state.books)
  const loadBooks = useBookStore((state) => state.loadBooks)
  const onDeleteBook = useBookStore((state) => state.deleteBook)
  const setActiveBook = useBookStore((state) => state.setActiveBook)
  const openModal = useUIStore((state) => state.openModal)

  const onUpdateBook = (book: BookWithId) => {
    openModal()
    setActiveBook(book)
  }

  useEffect(() => {
    loadBooks()
  }, [loadBooks])

  return (
    <div className='col-span-12 bg-[#181818] border border-[#444] rounded-2xl p-8 flex flex-col gap-8'>
      <header className='flex justify-between'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-2xl font-semibold'>Libros</h1>
          <span className='bg-amber-200 rounded-full w-7 h-7 font-bold flex justify-center items-center text-black'>
            {books.length}
          </span>
        </div>
      </header>
      {isLoadingBooks ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th className='text-left min-w-[200px]'>Título</th>
              <th className='text-left min-w-[150px]'>Autor</th>
              <th className='text-left min-w-[100px]'>Año</th>
              <th className='text-left min-w-[100px]'>Género</th>
              <th className='text-left min-w-[100px]'>Estado</th>
              <th className='text-left min-w-[50px]'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className='border-b last:border-none border-gray-50/30'>
                <td className='py-4'>{book.title || 'Desconocido'}</td>
                <td className='py-4'>{book.author}</td>
                <td className='py-4'>{book.publishYear}</td>
                <td className='py-4'>{book.genre}</td>
                <td className='py-4'>{book.status === 0 ? '✅' : '🔆'}</td>
                <td className='py-4 flex gap-1'>
                  <button>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6 cursor-pointer'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                      />
                    </svg>
                  </button>
                  <button onClick={() => onUpdateBook(book)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6 cursor-pointer'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                      />
                    </svg>
                  </button>
                  <button onClick={() => onDeleteBook(book.id)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6 cursor-pointer'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
