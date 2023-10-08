// React builtin components imports
import React from 'react';

// Third-party components imports
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

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
      <ToastContainer
        newestOnTop
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
