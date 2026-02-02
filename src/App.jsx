import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Index from "./index"; // index.jsx page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index" element={<Index />} />
    </Routes>
  );
}

export default App;
