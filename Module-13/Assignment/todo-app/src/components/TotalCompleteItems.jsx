import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.completed === true));
  return <h5 className='text-success mt-3'>Total Complete Items: {completedTodos.length}</h5>;
};

export default TotalCompleteItems;
