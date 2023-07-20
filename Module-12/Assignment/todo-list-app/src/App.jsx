import React from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className='container'>
      <h1>Todo List App</h1>
      <TodoList />
    </div>
  );
};

export default App;
