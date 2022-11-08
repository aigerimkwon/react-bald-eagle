import React from 'react'

const AddTodoForm = (props) => {

  const handleAddTodo = (event) => {
    event.preventDefault();
    
    let todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.reset();
    props.onAddTodo(todoTitle);
  }; 

  return (
    <div>
        <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" type="text" name="title" />
        <input type="submit" value="Add" />
        </form>
        
    </div>
  )
}

export default AddTodoForm