import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {
        newTodoText: "",
        id: "",
      },
    };
  }

  handleChange(event) {
    this.setState({ newTodoText: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (this.state.newTodoText.length === 0) {
      return;
    }
    this.props.onNewTodo({
      newTodoText: this.state.newTodoText,
      id: Date.now(),
    });
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
      </div>
    );
  }
}
