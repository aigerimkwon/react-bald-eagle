import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  id: PropTypes.number,
};

export default TodoListItem;
