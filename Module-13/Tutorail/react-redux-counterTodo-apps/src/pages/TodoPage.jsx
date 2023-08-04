import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              <h2>My Todo App</h2>
            </div>
            <div className='card-body'>
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
