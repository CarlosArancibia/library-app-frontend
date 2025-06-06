import { create } from 'zustand'
import libraryApi from '../api/requirementApi'

type BookId = string

export interface Book {
  title: string
  author: string
  publishYear: number
  genre: string
  status: number
}

export interface BookWithId extends Book {
  id: BookId
}

interface BookState {
  books: BookWithId[]
  loading: boolean
  activeBook: null | Book
  loadBooks: () => Promise<void>
  deleteBook: (id: BookId) => Promise<void>
  setActiveBook: (book: BookWithId) => void
  saveBook: (book: BookWithId) => void
}

const useBookStore = create<BookState>((set) => ({
  books: [],
  loading: false,
  activeBook: null,
  loadBooks: async () => {
    set({ loading: true })
    const { data } = await libraryApi.get(`books`)
    set({ books: data.books, loading: false })
  },
  deleteBook: async (id: BookId) => {
    await libraryApi.delete(`books/${id}`)
    set((state) => ({
      books: state.books.filter((book) => book.id !== id),
    }))
  },
  setActiveBook: (book: BookWithId) => {
    set({ activeBook: book })
  },
  saveBook: async (book: Partial<BookWithId>) => {
    if (book.id) {
      // update
      const { data } = await libraryApi.put(`books/${book.id}`, book)
      set((state) => ({
        books: state.books.map((b) => (b.id === book.id ? data : b)),
      }))
    } else {
      // create
      const { data } = await libraryApi.post('books', book)
      set((state) => ({
        books: [...state.books, data],
      }))
    }
  },
}))

export default useBookStore
