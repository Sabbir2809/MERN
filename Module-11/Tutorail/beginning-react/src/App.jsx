import React from 'react';
import Home from './pages/Home';

const App = () => {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      {isLoggedIn && <Home />}
    </>
  );
};

export default App;
