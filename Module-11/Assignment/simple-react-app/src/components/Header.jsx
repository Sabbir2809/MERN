import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='fixed-header'>
      <div className='container'>
        <nav>
          <h1>{title}</h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
