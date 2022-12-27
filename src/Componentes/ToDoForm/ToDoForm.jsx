import React, { useContext, useState } from "react";
import { ToDoContext } from "../../ToDoContext";
import './toDoForm.css';

export const ToDoForm = () => {
  //creamos un estado para el nuevo toDO
  const [newToDoValue, setNewToDoValue] = useState('');

  // Desestructuramos las funciones que necesitamos
  //para añadir un TODO y cerrar nuestro modal
  const {
    addToDo,
    setOpenModal,
  } = useContext(ToDoContext);

  //actualizar el estado de nuestro nuevo toDo
  const onChange = (e) => {
    setNewToDoValue(e.target.value);
  }

  //cerrar el modal, es el componete para add toDos
  const onCancel = () => {
    setNewToDoValue(false);
  }

  //add new toDo
  const onSubmit = (e) => {
    e.preventDefault(); // evitar q la pg se recarge
    addToDo(newToDoValue); // usamos la funcion para añadir toDos
    setOpenModal(false);//cerramos el modal
    setNewToDoValue(''); // reseteamos el estado del formulario
  }

  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value = {newToDoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
  );
};
