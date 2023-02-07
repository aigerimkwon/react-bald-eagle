import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodoList(data.records);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const deletedTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodo);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="board">
                <h4> Todo List</h4>
                <div className="paper">
                  <AddTodoForm onAddTodo={addTodo} />
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                  )}
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/new"
          element={
            <>
              <h1 style={{ textAlign: "center" }}>New Todo List</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
