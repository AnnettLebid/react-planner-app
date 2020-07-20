import React from 'react';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1> 
    <ToDoForm />
    {/* <ToDoList /> */}
    </div>
  );
}

export default App;
