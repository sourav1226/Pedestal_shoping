import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Index from "./index"; 
import Login from "./Login";
import Register from "./register";
// index.jsx page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
