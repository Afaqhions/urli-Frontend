import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
import UrlGenerator from './pages/urlGenerater.jsx'
import Features from './pages/Features.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlGenerator />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
