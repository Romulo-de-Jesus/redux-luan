// src/store/index.js
import { createStore } from 'redux'; // Importando o método para criar o store
import booksReducer from './booksReducer'; // Importando o reducer que gerencia os livros

// Criando o store com o reducer
const store = createStore(
  booksReducer, // Reducer que lida com a lógica de livros
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Habilita o Redux DevTools para depuração no navegador
);

export default store;
