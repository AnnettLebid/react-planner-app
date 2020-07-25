import React from "react";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import DoneList from "./components/DoneList/DoneList";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.onButtonClear = this.onButtonClear.bind(this);
  }

  handleOnNewTodo(newTodo) {
    this.setState((state) => {
      return {
        todos: [newTodo, ...state.todos],
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

  toggleDone(todo) {
    const index = todo.id;
    const todos = this.state.todos.map((todo) => {
      if (todo.id === index) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
  }

  toggleFavourite(todo) {
    const index = todo.id;
    const todos = this.state.todos.map((todo) => {
      if (todo.id === index) {
        todo.favourite = !todo.favourite;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
  }

  onButtonClear() {
    this.setState({ todos: [] });
  }

  editTodo(todo) {
    const index = todo.id;
    const todos = this.state.todos.map((todo) => {
      if (todo.id === index) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
  }

  render() {
    const todoList = this.state.todos
      .filter((todo) => !todo.isDone)
      .sort((a, b) => b.favourite - a.favourite);

    const doneList = this.state.todos.filter((todo) => todo.isDone);
    const todosLength = this.state.todos.length;
    console.log(this.state.todos);

    return (
      <div className="container">
        <div className="app-wrapper">
          <Header name="Todo App" />
          <ToDoForm
            todosLength={todosLength}
            onNewTodo={(newTodo) => this.handleOnNewTodo(newTodo)}
            onButtonClear={this.onButtonClear}
          />
          <Subheader name="To do" />
          <ToDoList
            todos={todoList}
            toggleFavourite={this.toggleFavourite}
            editTodo={this.editTodo}
            handleOnDelete={this.handleOnDelete}
            toggleDone={this.toggleDone}
          />
          <Subheader name="Done" />
          <DoneList
            doneTodos={doneList}
            toggleFavourite={this.toggleFavourite}
            editTodo={this.editTodo}
            handleOnDelete={this.handleOnDelete}
            toggleDone={this.toggleDone}
          />
        </div>
      </div>
    );
  }
}
