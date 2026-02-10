import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import About from './pages/About';
import Contact from './pages/Contact';
import { useLocation } from 'react-router-dom';

function App() {

  return (
    <ReactLenis root>
      <div className="antialiased bg-ajce-dark text-white min-h-screen selection:bg-ajce-gold selection:text-black">
        <Navbar />
        <main>
          <Home />
          <Courses />
          <Departments />
          <Faculty />
          <About />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
