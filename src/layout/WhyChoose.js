import React from 'react'
import { Box } from '@mui/material'
import BannerChoose from '../components/banner/BannerChoose'

const mainThemeColor = '#fffb62';

const WhyChoose = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <BannerChoose mainColor={mainThemeColor} />
      </Box> 
    </>
  )
}

export default WhyChoose