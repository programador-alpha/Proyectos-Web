import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Services from "./services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         {/* Página principal */}
        <Route path="/servicios" element={<Services />} />  {/* Página de servicios */}
      </Routes>
    </Router>
  );
}

export default App;
