import React, { Fragment, useContext } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader'
import { CreateTodoButtom } from "../Componentes/CreateTodoButtom";
import { TodoCounter } from "../Componentes/TodoCounter";
import { TodoList } from "../Componentes/TodoList";
import { TodoSearch } from "../Componentes/TodoSearch";
import { TodoItem } from '../Componentes/TodoItem';
import { ToDoContext } from "../ToDoContext";
import { Modal } from "../Componentes/Modal";
import { ToDoForm } from "../Componentes/ToDoForm/ToDoForm";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "150px",
}

export const AppUI = () => {

  // Desesctructuramos los valores de nuestro contexto, remplaza a englobar todo el codigo en un etiqueta ToDoContext.Consumer
  const {
    loading,
    error,
    searchedToDos,
    completeToDos,
    deleteToDos,
    openModal,
    setOpenModal,
  } = useContext(ToDoContext);

  return (
      <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { error && <p>Deseperate , hubo un error ...</p> }
        { loading &&
          <PacmanLoader
            color={'#36d7b7'}
            loading={loading}
            size= {40}
            cssOverride={override}
          />
        }
        {(!loading && !searchedToDos.length) && <p>!Crea tu primer toDo</p> }
        {
          searchedToDos.map( toDosList => (
            <TodoItem
              key={toDosList.text}
              text={toDosList.text}
              completed={toDosList.completed}
              onCompleted={() => completeToDos(toDosList.text)}
              onDelete={() => deleteToDos(toDosList.text)}
            />
          ))
        }
        </TodoList>
        { !!openModal && (
          <Modal >
            <ToDoForm />
          </Modal>
        )}

      <CreateTodoButtom
          setOpenModal={setOpenModal}
      />
    </Fragment>
  );
};

//poder consumir el  context , para acceder a sus valores <ToDoContext.Consumer/>

//<p>{searchedToDos.length > 0 && searchedToDos[0].text}</p> con esto evitas poner el ? de pregunta el cual daña el codigo