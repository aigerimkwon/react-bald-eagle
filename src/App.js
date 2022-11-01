import React, { useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [ newTodo, setNewTodo]=useState('');

  return (
    <div className="App">
      <h1> Todo List</h1>
      <div>
        <TodoList />
        <AddTodoForm 
          onAddTodo ={setNewTodo}
        />
        <p>
          {newTodo}
        </p>
      </div>
    </div>
  );
}

export default App;