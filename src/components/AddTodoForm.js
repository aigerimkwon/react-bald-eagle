import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import "./AddTodoForm.css";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  // to give the user feedback about invalid input
  const [isValid, setIsValid] = useState(true);

  const handleTitleChange = (event) => {
    // resetting the trim method
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    const newTodoTitle = event.target.value;

    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoTitle = event.target.title.value;
    // using trim built-in method to prevent adding empty "todo"
    if (todoTitle.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        styleOverWrite={{ border: !isValid ? "2px solid #EA3535" : "" }}
      >
        Title
      </InputWithLabel>
      <button
        style={{ backgroundColor: !isValid ? "#EA3535" : "" }}
        type="submit"
        className="submitButton"
      >
        Add
      </button>
      {!isValid ? <h5>Please fill out this field!</h5> : ""}
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
