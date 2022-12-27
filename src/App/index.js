import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";

// const toDosList = [
//   {
//     text: 'Corta el pasto',
//     completed: true ,
//   },
//   {
//     text: 'Tomar el curso de intro de react',
//     completed: false ,
//   },
//   {
//     text: 'Hacer proyectos',
//     completed: true ,
//   },
//   {
//     text: 'Estudiar 4hs',
//     completed: false ,
//   }
// ];

const App = () => {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
};

export default App ;