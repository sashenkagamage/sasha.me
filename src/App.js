import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {HashRouter as HashRouter, Routes,Route}
from 'react-router-dom';
import Home from './components/Home';
import Project1 from './components/pages/project1';
import Project2 from './components/pages/project2';
import Project3 from './components/pages/project3';

function App() {
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>
    </HashRouter>
  </>
  );
}

export default App;
