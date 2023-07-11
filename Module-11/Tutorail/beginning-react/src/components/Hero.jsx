import React from 'react';

const Hero = ({ something }) => {
  return (
    <div>
      <img
        onClick={something}
        style={{ width: '50%' }}
        src='https://daotaotester.com/wp-content/uploads/2021/10/react-logo.jpg'
        alt='img'
      />
    </div>
  );
};

export default Hero;
