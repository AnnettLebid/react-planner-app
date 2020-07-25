import React from "react";
import ResetButton from "../ResetButton/ResetButton";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {
        text: "",
        id: "",
        finished: false,
        favourite: false,
        isEditing: false,
      },
    };
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (!this.state.text) {
      return;
    }
    this.props.onNewTodo({
      text: this.state.text,
      id: Date.now(),
      isDone: false,
      favourite: false,
      isEditing: false,
    });
    document.getElementById("todoInput").value = "";
  }

  onButtonClear() {
    this.props.onButtonClear();
  }

  render() {
    const { todosLength } = this.props;
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} className="form">
          <input
            type="text"
            value={this.state.value}
            onChange={(event) => this.handleChange(event)}
            className="task-input"
            id="todoInput"
          />
          <div className="buttons">
            <button type="submit" className="btn add-task-btn">
              Add
            </button>           
            {todosLength > 0 && (
              <ResetButton
                onButtonClear={(event) => this.onButtonClear(event)}
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}
