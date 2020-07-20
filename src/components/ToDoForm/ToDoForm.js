import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
