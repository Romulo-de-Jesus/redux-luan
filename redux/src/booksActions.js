// src/actions/booksActions.js
export const addBook = (book) => {
    return {
      type: 'ADD_BOOK',
      payload: book
    };
  };
  
  export const removeBook = (id) => {
    return {
      type: 'REMOVE_BOOK',
      payload: id
    };
  };
  