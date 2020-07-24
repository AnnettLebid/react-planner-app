import React from "react";
// import CheckedButton from "./components/CheckedButton/CheckedButton.js"

function ToDoList(props) {
  const { todos } = props;

  function handleOnDelete(todo) {
  
    props.handleOnDelete(todo);
  }

  function moveToDoneList(todo, index) {
    props.moveToDoneList(todo, index);
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          {todo.newTodoText}
          <div>
            <button className="btn-edit task-btn">
              <i className="far fa-heart"></i>
            </button>
            <button className="btn-edit task-btn">
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button
              className="btn-delete task-btn"
              onClick={() => {
                handleOnDelete(todo);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn-edit task-btn"
              onClick={() => moveToDoneList(todo)}
            >
              <i className="fa fa-check-square" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
