import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  return (
    <div className="App">
      <h1> Todo List</h1>
      <div>
        <TodoList />
        <AddTodoForm />
      </div>
   </div>
  );
}

export default App;