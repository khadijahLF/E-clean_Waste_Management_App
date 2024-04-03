import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import AboutUs from "./components/Pages/AboutUs";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
