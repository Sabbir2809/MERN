import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <AppNavBar></AppNavBar>
      <Routes>
        <Route path="/" element />
        <Route path="/cart-list" element />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
