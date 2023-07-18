import React, { useRef } from 'react';

const App = () => {
  const info = useRef();
  const showHooks = () => {
    info.current.innerHTML = `
    <ul>
      <li>useRef</li>
      <li>useState</li>
      <li>useEffect</li>
      <li>useContext</li>
    </ul>
    `;
    info.current.classList.remove('text-success');
    info.current.classList.add('text-info');
  };

  const img = useRef();
  const showImg = () => {
    img.current.src = 'https://placehold.co/600x400?text=Hello+World';
    img.current.setAttribute('width', '300px');
    img.current.setAttribute('height', '200px');
  };

  const firstName = useRef();
  const lastName = useRef();

  const submit = () => {
    const fName = firstName.current.value;
    const lName = lastName.current.value;
    alert(`First Name is ${fName} and Last Name is ${lName}`);
  };

  return (
    <div>
      <h1 className='text-success' ref={info}>
        React Hooks
      </h1>
      <button onClick={showHooks}>Show React Hooks</button>
      <br />

      <img ref={img} src='https://placehold.co/600x400' alt='' />
      <button onClick={showImg}>Show Img</button>
      <br />

      <input ref={firstName} type='text' placeholder='First Name' />
      <input ref={lastName} type='text' placeholder='Last Name' />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default App;
