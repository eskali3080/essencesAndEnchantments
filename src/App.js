import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Products from './components/Products';
import Cremas from './components/Cremas';
import Otros from './components/Otros';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Leonisa from './components/Leonisa';



function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/colonias" element={<Products />} />
        <Route path="/cremas" element={<Cremas />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leonisa" element={<Leonisa />} />


      </Routes>
      <Footer />
    </div>
  );
}


//admin
//adminuser4321
export default App;
