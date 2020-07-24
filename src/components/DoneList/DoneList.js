import React from "react";

function DoneList(props) {
  const { doneTodos } = props;

  // function moveToTodoList(todo, index) {
  //   props.moveToTodoList(todo, index);
  // }

  function toggleDone(todo) {
    props.toggleDone(todo);
  }

  return (
    <ul className="list">
      {doneTodos.map((todo) => (
        <li key={todo.id} className="list-item">
          {todo.text}
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

export default DoneList;
