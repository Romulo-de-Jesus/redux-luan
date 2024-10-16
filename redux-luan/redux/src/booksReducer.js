// src/reducers/booksReducer.js
const initialState = {
    books: []
  };
  
  function booksReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload]
        };
      case 'REMOVE_BOOK':
        return {
          ...state,
          books: state.books.filter(book => book.id !== action.payload)
        };
      default:
        return state;
    }
  }
  
  export default booksReducer;
  