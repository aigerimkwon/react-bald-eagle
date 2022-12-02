import React, { useEffect, useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { Fragment } from 'react';


const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));
    return savedTodoList || [];
  }); 

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))

  }, [todoList]);
  return [todoList, setTodoList];
};
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList ([...todoList, newTodo]);
  };


  return (
    <>
      <h1> Todo List</h1>
        <AddTodoForm  onAddTodo ={addTodo}/>
        <TodoList todoList ={todoList} />
    </>
  );
}

export default App;