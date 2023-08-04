import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setCustom } from '../../redux/features/counter/counterSlice';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const customValue = useRef();

  return (
    <div className='card'>
      <div className='card-header bg-primary'>
        <h2 className='text-white'>Counter Apps</h2>
      </div>
      <div className='card-body'>
        <h1>{counter}</h1>
        <div className='my-4'>
          <button onClick={() => dispatch(increment())} className='btn btn-success'>
            Increase
          </button>
          <button onClick={() => dispatch(decrement())} className='btn btn-danger mx-2'>
            Decrease
          </button>
        </div>
      </div>
      <div className='my-4'>
        <input ref={customValue} type='number' className='form-control w-50 my-2' />
        <button
          onClick={() => dispatch(setCustom(customValue.current.value))}
          className='btn btn-danger w-50 my-2'>
          Set Custom
        </button>
      </div>
    </div>
  );
};

export default Counter;
