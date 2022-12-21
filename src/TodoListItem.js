import React from "react";

const TodoListItem = ({ todo, onRemoveTodo, id }) => {
  return (
    <li>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        remove
      </button>
    </li>
  );
};

export default TodoListItem;
