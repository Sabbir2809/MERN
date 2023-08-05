import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const CreateTodo = () => {
  const newTodo = useRef();
  const dispatch = useDispatch();

  const handleAddTo = () => {
    const todoText = newTodo.current.value.trim();
    if (todoText !== '') {
      dispatch(addTodo(todoText));
      newTodo.current.value = '';
    } else {
      alert('Please Enter a Task Name');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10'>
          <input ref={newTodo} type='text' placeholder='Enter New Task' className='form-control' />
        </div>
        <div className='col-2'>
          <button onClick={handleAddTo} className='btn btn-primary'>
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
