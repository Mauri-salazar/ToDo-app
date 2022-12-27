import React, { useContext } from "react";
//Necesitamos ReactDON para renderizar nuestro modal en el DON
import ReactDOM from 'react-dom';
import { ToDoContext } from "../../ToDoContext";
import './modal.css';

export const Modal = ({children}) => {
  const { setOpenModal } = useContext(ToDoContext);

  const onClickButton = () => {
    setOpenModal(false);
  }

  return ReactDOM.createPortal(
    <div className="ModalBackground">
        <button onClick={onClickButton}>x</button>
        <p>{children}</p>
    </div>,
    document.getElementById('modal')
  );
};
