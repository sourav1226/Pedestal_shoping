import { Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Product from "./product.jsx";
import About from "./About.jsx";
import Price from "./order.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/price" element={<Price />} />
    </Routes>
  );
}

export default App;

