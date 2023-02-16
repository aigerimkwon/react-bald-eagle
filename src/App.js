import React, { useEffect, useState, createContext } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((curr) => (curr === "light" ? "dark" : "light"));
  };

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
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="App" id={mode}>
                  <div className="switch">
                    <ReactSwitch
                      onChange={toggleMode}
                      checked={mode === "dark"}
                      onColor="#fff"
                      offColor="#0b1e38"
                      onHandleColor="#0b1e38"
                      offHandleColor="#fff"
                      handleDiameter={20}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={20}
                      width={48}
                    />
                  </div>
                  <div className="board">
                    <h4> Todo List</h4>
                    <div className="paper">
                      <AddTodoForm onAddTodo={addTodo} />
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        <TodoList
                          todoList={todoList}
                          onRemoveTodo={removeTodo}
                        />
                      )}
                    </div>
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
    </ThemeContext.Provider>
  );
}

export default App;
