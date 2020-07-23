import React from "react";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import DoneList from "./components/DoneList/DoneList";
import "./App.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      todos: [],
      doneTodos: [],
    };
    this.moveToDoneList = this.moveToDoneList.bind(this);
    this.moveToTodoList = this.moveToTodoList.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  handleOnNewTodo(newTodo) {
    this.setState((state) => {
      return {
        todos: [newTodo, ...state.todos],
      };
    });
  }

  moveToDoneList(todo) {
    const index = todo.id;
    this.setState((state) => {
      const todos = state.todos.filter((todo) => todo.id !== index);
      return {
        doneTodos: [todo, ...state.doneTodos],
        todos,
      };
    });
  }

  moveToTodoList(todo) {
    const index = todo.id;
    this.setState((state) => {
      const doneTodos = state.doneTodos.filter((todo) => todo.id !== index);
      return {
        todos: [todo, ...state.todos],
        doneTodos,
      };
    });
  }

  handleOnDelete(todo) {
    const index = todo.id;
    this.setState((state) => {
      const todos = state.todos.filter((todo) => todo.id !== index);
      return {
        todos,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <Header name="Todo App" />
          <ToDoForm onNewTodo={(newTodo) => this.handleOnNewTodo(newTodo)} />
          <Subheader name="To do" />
          <ToDoList
            todos={this.state.todos}
            moveToDoneList={this.moveToDoneList}
            handleOnDelete={this.handleOnDelete}
          />
          <Subheader name="Done" />
          <DoneList
            doneTodos={this.state.doneTodos}
            moveToTodoList={this.moveToTodoList}
          />
        </div>
      </div>
    );
  }
}
