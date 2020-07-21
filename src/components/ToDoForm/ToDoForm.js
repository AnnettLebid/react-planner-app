import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: "",
    };
  }

  handleChange(event) {
    this.setState({ newTodoText: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onNewTodo(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} className="form">
          <input
            label="What are you planning to do?"
            type="text"
            value={this.state.value}
            onChange={(event) => this.handleChange(event)}
            className="task-input"
          />
          <div className="buttons">
            <button type="submit" className="btn add-task-btn">
              Add
            </button>
            <button className="btn clear-btn">Clear</button>
          </div>
        </form>
        <div className="sub-header">To Do</div>
      </div>
    );
  }
}
