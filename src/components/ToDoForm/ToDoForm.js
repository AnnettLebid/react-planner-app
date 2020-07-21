import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',      
    };
  }  

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);   
    this.props.onNewTodo(this.state); 
  }

  render() {   
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(event) => this.setState({newTodo: event.target.value})}
          />
        </label>     
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
