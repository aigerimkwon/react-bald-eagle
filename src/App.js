import React, { useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [ todoList, setTodoList ] = useState([]); 

  const addTodo = (newTodo) => {
    setTodoList ([...todoList, newTodo]);
  }


  return (
    <div className="App">
      <h1> Todo List</h1>
      <div>
        <AddTodoForm  onAddTodo ={addTodo}/>
        <TodoList todoList ={todoList} />
      </div>
    </div>
  );
}

export default App;