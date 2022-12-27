import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './TodoItem.css';

export const TodoItem = (props) => {

    return (
      <li className="TodoItem">
        <i onClick={props.onCompleted} className={`Icon Icon-check ${props.completed && 'Icon-check--active'} bi bi-clipboard-check-fill`}></i>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <i onClick={props.onDelete} className="bi bi-trash Icon-delete"></i>
      </li>
  )
};

// <span className="bi bi-clipboard-check-fill"
// className="Icon Icon-delete"
// onClick={props.onDelete}
// >
// X
// </span>
// <span
// className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
// onClick={props.onCompleted}
// >
// √
// </span>