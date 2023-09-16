// React builtin components imports
import React from 'react';

// Third-party components imports
import { BrowserRouter } from 'react-router-dom';

// Custom component imports
import AppRoutes from './routes/AppRoutes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Styling sheet imports
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
