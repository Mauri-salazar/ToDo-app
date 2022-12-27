import React, { useContext } from "react";
import { ToDoContext } from "../../ToDoContext";
import './TodoSearch.css'

export const TodoSearch = () => {

  const {searchValue,setSearchValue} = useContext(ToDoContext);

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
      <input
        className="inp"
        placeholder="Write toDo"
        value={searchValue}
        onChange={onSearchValueChange}
        />
  )
};
