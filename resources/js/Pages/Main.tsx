import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Welcome';
import Navbar from '@/Components/Navbar';
import About from './About';
import Services from './Services';
import Technology from './Technology';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;