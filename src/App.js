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
  }

  handleOnNewTodo(newTodoText) {
    this.setState((state) => {
      return {
        todos: [newTodoText, ...state.todos],
      };
    });
  }

  // moveItem(index){
  //   this.setState((state) => {
  //     return {
  //       todos: [newTodoText, ...state.todos],
  //     };
  //   });
  // }

  handleToggle(index){
    console.log(index)
  }

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <Header name = "Todo App"/>
          <ToDoForm onNewTodo={(newTodoText) => this.handleOnNewTodo(newTodoText)} />
          <Subheader name = "To do"/>
          <ToDoList todos={this.state.todos} handleToggle = {this.handleToggle}/>
          <Subheader name = "Done"/>
          {/* <DoneList doneTodos = {this.state.doneTodos}/> */}
        </div>
      </div>
    );
  }
}
