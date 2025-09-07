import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Delivery from "./Pages/Delivery";
import Settings from "./Pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
