import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";
import Orders from "../Pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
