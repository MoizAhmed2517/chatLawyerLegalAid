// React builtin components imports
import React, {useState} from 'react'

// Third-party components imports
import { Routes, Route } from 'react-router';
import Home from '../layout/Home';
import AboutUs from '../layout/AboutUs';
import WhyChoose from '../layout/WhyChoose';
import ProductShowcase from '../layout/ProductShowcase';
import Pricing from '../layout/Pricing';
import LiveDemo from '../layout/LiveDemo';
import ContactUs from '../layout/ContactUs';
import SignIn from '../navigation/SignIn';
import SignUp from '../navigation/SignUp';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/why-choose-us" element={<WhyChoose />} />
      <Route path="/product-showcase" element={<ProductShowcase />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/live-demo" element={<LiveDemo />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp /> } />
    </Routes>
  )
}

export default AppRoutes