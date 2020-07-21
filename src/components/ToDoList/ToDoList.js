import React from "react";

function ToDoList(props) {
  
  return (
    <ul>
      {props.todos.map((todo, index) =>
        <li key={index}>
          {todo.newTodo}
        </li>
      )}
    </ul>
  )
}


export default ToDoList;

