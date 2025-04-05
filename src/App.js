import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project2 from './components/pages/project2';
import Project3 from './components/pages/project3';
import Escapades1 from './components/pages/Escapades1';
import Contact from './components/pages/Contact';

// Layout component for pages that include Navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Contact page without navbar */}
        <Route path="/contact" element={<Contact />} />
        
        {/* All other routes with navbar */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/Escapades1" element={<MainLayout><Escapades1 /></MainLayout>} />
        <Route path="/project2" element={<MainLayout><Project2 /></MainLayout>} />
        <Route path="/project3" element={<MainLayout><Project3 /></MainLayout>} />
      </Routes>
    </HashRouter>
  );
}

export default App;


