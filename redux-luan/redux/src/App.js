// src/App.js
import './App.css'
import React, { useContext, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './BooksList';
import AddBook from './AddBook';
import BotaoTrocarTema from './AlterarTema';
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme; // Define a classe do body com base no tema
  }, [theme]);
  return (

    <div className="DivApp">
    <BotaoTrocarTema/> 
    <Provider store={store}>


        <h1>Lista de Livros</h1>
        <AddBook />
        <BookList />

    </Provider>

    </div>

  );
}

export default App;
