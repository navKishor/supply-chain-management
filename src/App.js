import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VenderLogin from './components/Vender/Venderlogin';
import ProductForm from './components/Product/ProductForm';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallary" element={<Gallary/>} />
      </Routes>
    </Router>
  );
}

export default App;
