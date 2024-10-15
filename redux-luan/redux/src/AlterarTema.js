import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const BotaoTrocarTema = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <button onClick={toggleTheme}>
        Mudar para modo {theme === "claro" ? "escuro" : "claro"}
      </button>
    );
  };
  
  export default BotaoTrocarTema;