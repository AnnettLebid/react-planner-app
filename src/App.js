import React from "react";
import { Container } from "@material-ui/core";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    };
  }

  handleOnNewTodo(newTodo) {
    this.setState((state) => {
      return {
        todos: [newTodo, ...state.todos]
      }
    })
  };

  render() {    
    return (
      <div className="App">
        <Container maxWidth="sm">
          <h1>Todo App</h1>
        <ToDoForm  onNewTodo={(newTodo) => this.handleOnNewTodo(newTodo)}/>
        <ToDoList todos={this.state.todos} /> 
        </Container>
      </div>
    );
  }
}

