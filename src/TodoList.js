import React from 'react'
import TodoListItem from './TodoListItem';


const TodoList = () => {
    const todoList = [
        { id: 1, title: "study" },
        { id: 2, title: "code" },
        { id: 3, title: "complete assigment" },
      ];
  return (
    <div>
        <ul> 
          {todoList.map((todo) => {
            return (
              <TodoListItem key={todo.id} todo={todo} />
            )
          })}
        </ul>
        </div>
  )
}

export default TodoList