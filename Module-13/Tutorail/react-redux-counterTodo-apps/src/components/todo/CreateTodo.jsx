import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/features/todo/todoSlice';

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-9'>
          <input ref={taskInput} type='text' className='form-control' placeholder='Enter Task Name' />
        </div>
        <div className='col-3'>
          <button onClick={() => dispatch(addTodo(taskInput.current.value))} className='btn btn-primary'>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
