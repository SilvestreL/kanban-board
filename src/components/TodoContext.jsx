import React, { createContext, useState } from 'react';

// Criando o contexto
export const TodoContext = createContext();

// Criando o Provider
export const TodoProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([1, 2, 3]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  // O valor que será passado para os consumidores do contexto
  const value = {
    toDoList,
    doing,
    done,
    setToDoList,
    setDoing,
    setDone
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
