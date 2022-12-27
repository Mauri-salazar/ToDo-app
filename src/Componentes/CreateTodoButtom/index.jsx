import React, { Fragment } from "react";
import './CreateTodoButton.css';

export const CreateTodoButtom = (props) => {
  const onClickButton = () => {
    props.setOpenModal(true);
  }

  return (
    <Fragment>
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
      >
        +
      </button>
    </Fragment>
  )

};
