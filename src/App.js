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
      // item:"",
      // editItem: false
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
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== index);
    const selectedTodo = this.state.todos.find((todo) => todo.id === index);
     
    const todos = this.state.todos.map((todo) => {
      if (todo.id === index) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
    console.log(selectedTodo); 
  }

  handleChange(event){
    this.setState({
      item: event.target.value
    })
  }

  render() {
    const { todos } = this.state;

    const todoList = todos
      .filter((todo) => !todo.isDone)
      .sort((a, b) => b.favourite - a.favourite);
    const doneList = todos.filter((todo) => todo.isDone);
    const todosLength = todos.length;   

    return (
      <div className="container">
        <div className="app-wrapper">
          <Header name="Todo App" />
          <ToDoForm
            item = {this.state.item}
            handleChange = {this.handleChange}
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
