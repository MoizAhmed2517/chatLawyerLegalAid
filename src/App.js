// React builtin components imports
import React from 'react';

// Third-party components imports
import { BrowserRouter } from 'react-router-dom';

// Custom component imports
import AppRoutes from './routes/AppRoutes';


// Styling sheet imports
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
