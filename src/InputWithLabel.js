import React, { useEffect, useRef } from "react";
import { Fragment } from "react";
const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        placeholder="new todo"
        style={{
          color: "#475a50",
          background: "#f4dab1",
          padding: "0.3rem",
          textAlign: "center",
          margin: "0.3rem",
        }}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
