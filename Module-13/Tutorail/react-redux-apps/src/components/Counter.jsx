import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slice/counterSlice';

const Counter = () => {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>React-Redux Counter Apps</h3>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default Counter;
