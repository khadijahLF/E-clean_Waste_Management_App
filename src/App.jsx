import HomeNav from "./components/HomeNav"
import Home from "./components/Home"
import OurServices from "./components/OurServices"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
     
      <Routes> 
        <Route path="/" element={<HomeNav />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </Router>
  );
}

export default App
