import React from "react";

function ToDoList(props) {
  const { todos } = props;

  function toggleFavourite(todo) {
    props.toggleFavourite(todo);
  }

  function editTodo(todo) {
    props.editTodo(todo);
  }

  function handleOnDelete(todo) {
    props.handleOnDelete(todo);
  }

  function toggleDone(todo) {
    props.toggleDone(todo);
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type="text"
            className="list-input"
            id={todo.id}
            value={todo.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, todo.id);
            }}
          />
          <div className="list-item">
            <button
              name="favourite"
              className="btn-style task-btn"
              onClick={() => toggleFavourite(todo)}
            >
              <i
                className={todo.favourite ? "far fa-heart red" : "far fa-heart"}
              ></i>
            </button>
            <button
              name="edit"
              className="btn-style task-btn"
              onClick={() => {
                editTodo(todo);
              }}
            >
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button
              name="delete"
              className="btn-delete task-btn"
              onClick={() => {
                handleOnDelete(todo);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              name="toggleDone"
              className="btn-style task-btn"
              onClick={() => toggleDone(todo)}
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
