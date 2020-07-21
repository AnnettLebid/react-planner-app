import React from "react";

function ToDoList(props) {
  const { todos } = props;

  return (
    <ul className = "list">
      {todos.map((todo, index) =>
        <li 
        key={index} className = "list-item">
          {todo.newTodoText}
        </li>
      )}
    </ul>
  )
}


export default ToDoList;

