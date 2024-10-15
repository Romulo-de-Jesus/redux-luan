import React, { createContext, useState } from "react";

// Criando o contexto
export const ThemeContext = createContext(); // Verifique se o contexto está sendo exportado corretamente

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Inicializando o tema como "light"

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Passando o valor corretamente */}
      {children}
    </ThemeContext.Provider>
  );
};