import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from './booksActions';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} 
          <button onClick={() => dispatch(removeBook(book.id))}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;