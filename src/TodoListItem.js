import React from "react";

const TodoListItem = ({ todo, onRemoveTodo, id }) => {
  return (
    <li>
      <p>{todo.fields.Title}</p>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        remove
      </button>
    </li>
  );
};

export default TodoListItem;
