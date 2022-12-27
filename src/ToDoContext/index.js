import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const ToDoContext = createContext();

const ToDoProvider = (props) => {
  //guardamos el localStorage en nuestro estado
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  const {
    item:toDos , //renombramos los datos q nos llegan desde nuestro hook useLocalStorage
    saveItem:saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false); //creamos un estado para poder manejar al componente modal , para poder cerrarlo y abrirlo


  const completedToDos = toDos.filter( e =>  e.completed === true).length;

  const totalToDos = toDos.length;

  let searchedToDos = [] ;

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //añadimos un nuevo toDo
  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text,
    });
    saveToDos(newToDos);
  }


  //cambiamos el valor de completed
  const completeToDos = (text) => {
    const toDoIndex = toDos.findIndex( todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveToDos(newToDos);

  }

  //eliminamos toDos
  const deleteToDos = (text) => {
    const toDoIndex = toDos.findIndex( todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }


  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value,
  // que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return (
    <ToDoContext.Provider value={{
      loading,
      error,
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      addToDo,
      completeToDos,
      deleteToDos,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </ToDoContext.Provider>
  )
};

// Exportamos nuestro proveedor y nuestro contexto,
// en el context también esta el consumer, para acceder a nuestro contexto
export { ToDoProvider , ToDoContext };