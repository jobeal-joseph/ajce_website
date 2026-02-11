import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Landing from './pages/Landing';
import DepartmentDetails from './pages/DepartmentDetails';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/department/:id" element={<DepartmentDetails />} />
        </Routes>
      </div>
    </ReactLenis>
  );
}

export default App;
