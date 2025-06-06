import { useEffect, useState } from 'react'
import { Modal } from '../../components/Modal'
import useUIStore from '../../store/useUIStore'
import useBookStore, { type Book } from '../../store/useBookStore'

export const FormBook = () => {
  const isOpen = useUIStore((state) => state.isOpen)
  const onCloseModal = useUIStore((state) => state.closeModal)
  const activeBook = useBookStore((state) => state.activeBook)

  const [formValues, setFormValues] = useState<Book>({
    title: '',
    author: '',
    publishYear: 1800,
    genre: '',
    status: 0,
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  useEffect(() => {
    if (activeBook) {
      setFormValues(activeBook)
    }
  }, [activeBook])

  const onSaveBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //
  }

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <div className='flex flex-col gap-4'>
        <header>
          <h3 className='font-semibold text-2xl'>Libro</h3>
        </header>
        <hr />
        <form className='flex flex-col gap-2' onSubmit={onSaveBook}>
          <div className='flex flex-col'>
            <label htmlFor='title' className='text-sm'>
              Título
            </label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Ingrese el título'
              className='border rounded p-1'
              value={formValues.title}
              onChange={onInputChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='author' className='text-sm'>
              Author
            </label>
            <input
              type='text'
              name='author'
              id='author'
              placeholder='Ingrese el autor'
              className='border rounded p-1'
              value={formValues.author}
              onChange={onInputChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='publishYear' className='text-sm'>
              Año
            </label>
            <input
              type='number'
              name='publishYear'
              id='publishYear'
              placeholder='Ingrese el año'
              className='border rounded p-1'
              value={formValues.publishYear}
              onChange={onInputChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='genre' className='text-sm'>
              Género
            </label>
            <input
              type='text'
              name='genre'
              id='genre'
              placeholder='Ingrese el género '
              className='border rounded p-1'
              value={formValues.genre}
              onChange={onInputChange}
            />
          </div>
          <button className='bg-orange-200 w-full text-gray-800 font-semibold rounded-xl p-2 mt-4 cursor-pointer'>
            Guardar
          </button>
        </form>
      </div>
    </Modal>
  )
}
