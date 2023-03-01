import React, { useEffect, useRef } from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({
  todoTitle,
  handleTitleChange,
  children,
  styleOverWrite = {},
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);

  return (
    <>
      <label style={{ color: "#009db7" }} htmlFor="todoTitle">
        {children}
      </label>

      <input
        id="todoTitle"
        type="text"
        name="title"
        placeholder="new todo"
        style={{
          borderRadius: "8px",
          color: "black",
          background: "#fbfcff",
          padding: "0.3rem",
          textAlign: "center",
          margin: "0.3rem",
          ...styleOverWrite,
        }}
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.string,
  styleOverWrite: PropTypes.object,
};

export default InputWithLabel;
