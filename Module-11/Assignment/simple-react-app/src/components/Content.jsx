import React, { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div className='content'>
      <textarea
        rows='4'
        cols='50'
        value={inputText}
        onChange={handleChange}
        placeholder='Enter some text...'
      />
      <br />
      <button onClick={handleClick}>Display Text</button>
      {displayText && <h2>{displayText}</h2>}
    </div>
  );
};

export default Content;
