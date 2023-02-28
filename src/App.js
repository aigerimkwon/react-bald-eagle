import React, { useState, createContext } from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ReactSwitch from "react-switch";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer.js";
import { ReactComponent as UncheckedIcon } from "./icons/UnchekedIcon.svg";
import { ReactComponent as ChekedIcon } from "./icons/ChekedIcon.svg";
export const ThemeContext = createContext(null);

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App" id={mode}>
                <div className="header">
                  <Navbar />
                  <div className="switch">
                    <ReactSwitch
                      onChange={toggleMode}
                      checked={mode === "dark"}
                      onColor="#fff"
                      offColor="#0b1e38"
                      onHandleColor="#0b1e38"
                      offHandleColor="#fff"
                      handleDiameter={25}
                      height={30}
                      width={68}
                      uncheckedIcon={<UncheckedIcon />}
                      checkedIcon={<ChekedIcon />}
                    />
                  </div>
                </div>
                <TodoContainer
                  todoList={todoList}
                  setTodoList={setTodoList}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
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
