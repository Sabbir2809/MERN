import React from 'react';

const Header = ({ api }) => {
  const items = ['A', 'B', 'C', 'D', 'E', 'F'];
  return (
    <div>
      <h1 style={{ backgroundColor: 'skyblue', textAlign: 'center' }}>{api.title}</h1>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
