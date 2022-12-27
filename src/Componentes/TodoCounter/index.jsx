import React, { useContext } from "react";
import { ToDoContext } from "../../ToDoContext";
import './TodoCounter.css';

export const TodoCounter = () => {
  const {
    totalToDos,
    completedToDos,
  } = useContext(ToDoContext);

  return (
    <h1 className="title">Have you complite {completedToDos} the {totalToDos} toDos</h1>
    )
};
