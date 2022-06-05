import React from 'react';
import './App.css';
// components
import Todo from './components/todo';
import Input from './components/input';

function App() {
  let inputValue = '';
  function onSubmit(value) {
    console.log(value);
  }
  return (
    <div className="App">
      <h1 style={{ background: 'violet' }}>TodoList</h1>
      <Input onSubmit={onSubmit} />
      <Todo />
      {inputValue}
    </div>
  );
}

export default App;
