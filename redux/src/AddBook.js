// src/components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './booksActions';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: Date.now(), title }; // Cria um novo livro com id único
    dispatch(addBook(newBook));
    setTitle(''); // Limpa o campo de entrada
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título do livro"
      />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default AddBook;
