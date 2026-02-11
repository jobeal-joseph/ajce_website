import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Placements from './pages/Placements';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutDetailed from './pages/AboutDetailed';
import { useLocation } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <ReactLenis root>
          <div className="antialiased text-white min-h-screen selection:bg-ajce-gold selection:text-black">
            <Navbar />
            <main>
              <Home />
              <Courses />
              <Departments />
              <Placements />
              <About />
              <Contact />
            </main>
          </div>
        </ReactLenis>
      } />
      <Route path="/about-detailed" element={<AboutDetailed />} />
    </Routes>
  );
}

export default App;
