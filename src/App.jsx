import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Checker from "./pages/Checker";
import Reports from "./pages/Reports";
import About from "./pages/About";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checker" element={<Checker />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;