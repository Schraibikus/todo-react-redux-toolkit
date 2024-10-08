import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/todoSlice";

const TodoItem = ({ id, title, complited }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        onChange={() => {
          dispatch(toggleStatus(id));
        }}
      />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
