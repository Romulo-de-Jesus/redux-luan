import React, { createContext, useState } from "react";

// Criando o contexto
export const ThemeContext = createContext(); // Verifique se o contexto está sendo exportado corretamente

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("claro"); // Inicializando o tema como "claro"

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro")
  );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Passando o valor corretamente */}
      {children}
    </ThemeContext.Provider>
  );
};