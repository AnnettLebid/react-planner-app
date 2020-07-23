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
      todos: [],
      doneTodos: [],
    };
    this.handleToggleMove = this.handleToggleMove.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  handleOnNewTodo(newTodo) {
    this.setState((state) => {
      return {
        todos: [newTodo, ...state.todos],
      };
    });
  }

  handleToggleMove(todo) {
    const index = todo.id
    console.log(index)
    console.log(todo);
    this.setState((state) => {
      const todos = state.todos.filter((todo) => todo.id !== index);
      return {
        doneTodos: [todo, ...state.doneTodos],
        todos,
      };
    }); 
  }

  handleOnDelete(todo) {
    console.log(todo);
    // this.setState((state) => {
    //   return {
    //     todos: [newTodo, ...state.todos],
    //   };
    // });

    // const doneTodo = todos.splice(index, 1)
    // console.log(doneTodo.index)
    // this.setState((state) => {
    // doneTodos([doneTodo[0], ... doneTodos])
    //   console.log(this.state.todos);
    //   const todos = state.todos.filter((index, 1))
    //   return todos
  }

  onClearArray = () => {
    this.setState({ todos: [], doneTodos: [] });
  };

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <Header name="Todo App" />
          <ToDoForm onNewTodo={(newTodo) => this.handleOnNewTodo(newTodo)} />
          <Subheader name="To do" />
          <ToDoList
            todos={this.state.todos}
            handleToggleMove={this.handleToggleMove}
            handleOnDelete={this.handleOnDelete}
          />
          <Subheader name="Done" />
          <DoneList doneTodos={this.state.doneTodos} />
        </div>
      </div>
    );
  }
}
