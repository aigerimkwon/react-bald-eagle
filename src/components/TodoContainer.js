import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Select from "react-select";
import "./TodoContainer.css";
const sortCategories = [
  {
    label: "Title 'A-Z'",
    sortMethod: (objectA, objectB) => {
      if (objectA.fields.Title < objectB.fields.Title) {
        return -1;
      } else if (objectA.fields.Title > objectB.fields.Title) {
        return 1;
      } else return 0;
    },
  },
  {
    label: "Title 'Z-A'",
    sortMethod: (objectA, objectB) => {
      if (objectA.fields.Title > objectB.fields.Title) {
        return -1;
      } else if (objectA.fields.Title < objectB.fields.Title) {
        return 1;
      } else return 0;
    },
  },
];

const TodoContainer = ({ todoList, setTodoList, isLoading, setIsLoading }) => {
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

        // will show newest todo first
        data.records.sort((objectA, objectB) => {
          return objectB.createdTime.localeCompare(objectA.createdTime);
        });
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

  const [sortCategory, setSortCategory] = useState(null);
  let sortedTodo = [...todoList];
  if (sortCategory) {
    sortedTodo = todoList.sort(sortCategory.sortMethod);
  }
  return (
    <div className="container">
      <div className="board">
        <h4> Todo List</h4>
        <div className="paper">
          <AddTodoForm onAddTodo={addTodo} />
          <Select
            className="select"
            value={sortCategory}
            onChange={(option) => setSortCategory(option)}
            options={sortCategories}
            placeholder="sort by"
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
