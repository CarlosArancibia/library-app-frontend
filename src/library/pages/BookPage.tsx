import { BookLayout } from '../../layout/BookLayout'
import { FormBook } from '../books/formBook'
import { ListBooks } from '../books/ListBooks'

export const BookPage = () => {
  return (
    <BookLayout>
      <ListBooks />
      <FormBook />
    </BookLayout>
  )
}
