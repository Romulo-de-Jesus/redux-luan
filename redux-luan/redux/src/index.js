// src/index.js
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Certifique-se de que App está sendo importado corretamente
import { ThemeProvider } from "./ThemeContext"

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
    document.getElementById("root")
);
