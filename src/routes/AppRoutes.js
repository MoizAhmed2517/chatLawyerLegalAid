// React builtin components imports
import React, {useState} from 'react'

// Third-party components imports
import { Routes, Route } from 'react-router';
import Home from '../layout/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes