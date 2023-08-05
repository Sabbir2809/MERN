import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todoSlice';

const AddTodoForm = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} className='form-inline col-6 mt-3 mb-3'>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add New Todo...'
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type='submit' className='btn btn-primary col-6 mb-2'>
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
