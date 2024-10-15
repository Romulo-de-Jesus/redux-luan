// src/App.js
import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './BooksList';
import AddBook from './AddBook';
import BotaoTrocarTema from './AlterarTema';

function App() {
  return (

    <div className='DivApp'>

    <Provider store={store}>
      <div className='classdiv'>
      <BotaoTrocarTema></BotaoTrocarTema> 
        <h1>Lista de Livros</h1>
        <AddBook />
        <BookList />
      </div>
    </Provider>
    </div>

  );
}

export default App;
