import React from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo, id }) => {
  return (
    <li className={style.ListItem}>
      {todo.fields.Title}
      <button
        className={style.button}
        type="button"
        onClick={() => onRemoveTodo(todo.id)}
      >
        done
      </button>
    </li>
  );
};

export default TodoListItem;
