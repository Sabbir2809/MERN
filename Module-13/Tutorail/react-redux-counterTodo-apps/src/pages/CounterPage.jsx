import React from 'react';
import Counter from '../components/counter/Counter';

const CounterPage = () => {
  return (
    <main className='container mt-5'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <Counter />
        </div>
      </div>
    </main>
  );
};

export default CounterPage;
