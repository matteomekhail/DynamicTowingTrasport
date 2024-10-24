import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Welcome';
import Navbar from '@/Components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;