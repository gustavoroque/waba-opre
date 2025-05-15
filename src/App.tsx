import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CommercialPolicy from "./pages/CommercialPolicy";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-comercial" element={<CommercialPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
