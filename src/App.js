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
    };
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);    
    this.handleOnDelete = this.handleOnDelete.bind(this);   
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

  // handleDoneButtonClick() {
  //   this.setState({isDone: true});
  // }
 
  toggleDone(todo){
    const index = todo.id
    const todos = this.state.todos.map(todo => {
      if (todo.id === index) {
        todo.isDone = !todo.isDone
      }     
      return todo
    });
    this.setState({todos, todo: ''})    
  }

  toggleFavourite(todo){
    const index = todo.id
    const todos = this.state.todos.map(todo => {
      if (todo.id === index) {
        todo.favourite = !todo.favourite
      }     
      return todo
    });
    this.setState({todos, todo: ''})    
  }

  render() {
    console.log(this.state.todos)
    const doneList = this.state.todos.filter((todo) => todo.isDone);
    const todoList = this.state.todos.filter((todo) => !todo.isDone);

    return (
      <div className="container">
        <div className="app-wrapper">
          <Header name="Todo App" />
          <ToDoForm onNewTodo={(newTodo) => this.handleOnNewTodo(newTodo)} />
          <Subheader name="To do" />
          <ToDoList
            todos={todoList}
            toggleDone={this.toggleDone}
            handleOnDelete={this.handleOnDelete}
            toggleFavourite={this.toggleFavourite}
          />
          <Subheader name="Done" />
          <DoneList
            doneTodos={doneList}
            toggleDone={this.toggleDone}          
          />
        </div>
      </div>
    );
  }
}
