import React from "react";
// import CheckedButton from "./components/CheckedButton/CheckedButton.js"

function ToDoList(props) {
  const { todos } = props;

  function handleOnDelete(index) {
    console.log(index)
    props.handleOnDelete(index);
  }

  function handleToggleMove(index) {
    props.handleToggleMove(index);
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
              onClick={() => {handleOnDelete(todo.id)}}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            {/* <button className="btn-edit task-btn" onClick ={() => console.log(index)}> */}

            <button
              className="btn-edit task-btn"
              onClick={() => handleToggleMove(todo.id)}
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
