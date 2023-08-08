import React from 'react';
import loader from './../../assets/images/loader.svg';
import './../../assets/styles/loader.css';

const FullScreenLoader = () => {
  return (
    <div className='ProcessingDiv'>
      <div className='center-screen'>
        <img className='loader-size' src={loader} />
      </div>
    </div>
  );
};

export default FullScreenLoader;
