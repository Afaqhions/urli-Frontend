import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing main page
import UrlGenerator from './pages/urlGenerater.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
