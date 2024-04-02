import Home from "./components/Pages/Home"
import OurServices from "./components/Pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App
