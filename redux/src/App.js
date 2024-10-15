// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './BooksList';
import AddBook from './AddBook';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Livros</h1>
        <AddBook />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
