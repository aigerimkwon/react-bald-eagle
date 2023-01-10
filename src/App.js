import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Fragment } from "react";

//const useSemiPersistentState = () => {
//const [todoList, setTodoList] = useState(() => {
//const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));
//return savedTodoList || [];
//});

//useEffect(() => {
//ocalStorage.setItem("savedTodoList", JSON.stringify(todoList));
//}, [todoList]);
//return [todoList, setTodoList];
//};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList([...result.data.todoList]);
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
    <>
      <h1> Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
