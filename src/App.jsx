import Home from "./components/Pages/Home"
import Services from "./components/Pages/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
    </Router>
  );
}

export default App
