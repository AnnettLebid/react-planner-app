import React from "react";
import Header from "./components/Header/Header";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import DoneList from "./components/DoneList/DoneList";
import "./App.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      doneTodos: [],
    };
  }

  handleOnNewTodo(newTodoText) {
    this.setState((state) => {
      return {
        todos: [newTodoText, ...state.todos],
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <ToDoForm onNewTodo={(newTodoText) => this.handleOnNewTodo(newTodoText)} />
          <ToDoList todos={this.state.todos} />
          <DoneList doneTodos = {this.state.todos}/>
        </div>
      </div>
    );
  }
}
