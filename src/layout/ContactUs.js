import React from 'react'
import { Box } from '@mui/material'
import BannerContact from '../components/banner/BannerContact';

const mainThemeColor = '#fffb62';

const ContactUs = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <BannerContact mainColor={mainThemeColor} />
      </Box> 
    </>
  )
}

export default ContactUs