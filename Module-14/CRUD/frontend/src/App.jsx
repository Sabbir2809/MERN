import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppNavBar from "./components/Common/AppNavBar";
import NotFound from "./components/Common/NotFound";
import CreateForm from "./components/Create/CreateForm";
import ReadTable from "./components/Read/ReadTable";

const App = () => {
  return (
    <BrowserRouter>
      <AppNavBar />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<ReadTable />} />
        <Route path="/create-product" element={<CreateForm />} />
        <Route path="/update-product/:id" element={<CreateForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
