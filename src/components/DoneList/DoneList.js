import React from "react";

function DoneList(props) {
  const { doneTodos } = props;

  // const handleonMoveButton = (doneTodo) =>
  return (
    <ul className="list">
      {doneTodos.map((todo, index) => (
        <li key={index} className="list-item">
          {todo.newTodoText}
          <div>
            <button className="btn-edit task-btn">
              <i className="far fa-heart"></i>
            </button>
            <button className="btn-edit task-btn">
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button className="btn-delete task-btn">
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn-edit task-btn"
              //   onClick={() => handleToggle(todo)}
            >
              <i className="fa fa-check-square" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DoneList;
