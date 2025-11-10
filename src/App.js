import React from 'react';
import './App.css';
import './components/mainCon.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project2 from './components/pages/project2';
import Project3 from './components/pages/project3';
import Cambridge from './components/pages/Cambridge';
import Madison from './components/pages/Madison';
import Contact from './components/pages/Contact';

// Layout component for pages that include Navbar
const MainLayout = ({ children }) => (
  <>
    {/* PhD Position Notification Banner */}
    <div className='phd-notification-banner'>
      <div className='phd-notification-content'>
        <span className='phd-notification-text'>
        <span className='phd-notification-icon'>🎓</span>
          <strong> Seeking PhD Opportunities</strong> - I am actively looking for PhD positions in Robotics, Autonomous Systems, and UAV Navigation starting Fall 2026. 
          <a href="mailto:sashenka.gamage@connect.polyu.hk" className='phd-contact-link'>Get in touch</a>
        </span>
      </div>
    </div>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Contact page without navbar */}
        <Route path="/contact" element={<Contact />} />
        
        {/* All other routes with navbar */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/cambridge" element={<MainLayout><Cambridge /></MainLayout>} />
        <Route path="/madison" element={<MainLayout><Madison /></MainLayout>} />
        <Route path="/project2" element={<MainLayout><Project2 /></MainLayout>} />
        <Route path="/project3" element={<MainLayout><Project3 /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


