import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Order from "./Order.jsx";
import Index from "./index";
import Login from "./Login";
import Register from "./register";
import Product from "./product.jsx";
import ForgotPassword from "./forgot-password.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/index" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<Product />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
