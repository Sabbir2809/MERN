import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";

const App = () => {
  return (
    <BrowserRouter>
      <AppNavBar></AppNavBar>
      <Routes>
        <Route path='/' element />
        <Route path='/cart-list' element />
        <Route path='/login' element />
        <Route path='/register' element />
        <Route path='/otp' element />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
