import React from "react";

function ToDoList(props) {
  const { todos } = props;
  console.log(todos)

  function handleOnDelete(todo) {  
    props.handleOnDelete(todo);
  }

  function toggleDone(todo) {
    props.toggleDone(todo);
  }

  function toggleFavourite(todo) {
    props.toggleFavourite(todo);
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          {todo.text}
          <div>
            <button className="btn-edit task-btn"
            onClick = {() => toggleFavourite(todo)}>
              <i className="far fa-heart"></i>              
            </button>
            <button className="btn-edit task-btn">
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button className="btn-delete task-btn"
              onClick={() => {handleOnDelete(todo)}}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn-edit task-btn"
              onClick={() => toggleDone(todo)}>
              <i className="fa fa-check-square" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
