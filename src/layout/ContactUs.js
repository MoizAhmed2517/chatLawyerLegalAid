import React from 'react'
import { Box } from '@mui/material'
import BannerContact from '../components/banner/BannerContact';
import Footer from './Footer';

const mainThemeColor = '#fffb62';

const ContactUs = () => {
  return (
    <>
      
      <BannerContact mainColor={mainThemeColor} />

      <Box sx={{ 
        height: 'auto',
        background: '#10100d',
        borderTop: '1px solid #0a0a0a',
        boxShadow: '1px 1px 1px 1px black',
        px: 17,
        pt: 3,
        pb: 2.5,
      }}>
          <Footer mainColor={mainThemeColor} />    
      </Box>

    </>
  )
}

export default ContactUs