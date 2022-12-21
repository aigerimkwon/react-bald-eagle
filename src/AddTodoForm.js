import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoTitle = event.target.title.value;

    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTodoForm;
