import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConvertedPage from './pages/ConvertedPage';
import LandingPage from './pages/Landing';
import ContactPage from './pages/Contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/converter" element={<ConvertedPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App
