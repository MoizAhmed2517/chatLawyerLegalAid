import React from 'react'
import { Box } from '@mui/material'
import BannerContact from '../components/banner/BannerContact';
import Footer from './Footer';

const mainThemeColor = '#fffb62';

const ContactUs = () => {
  return (
    <>
      
      <BannerContact mainColor={mainThemeColor} />

      <Footer mainColor={mainThemeColor} />

    </>
  )
}

export default ContactUs