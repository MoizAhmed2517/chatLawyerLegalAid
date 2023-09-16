import React from 'react'
import { Box } from '@mui/material'
import BannerShowcase from '../components/banner/BannerShowcase'

const mainThemeColor = '#fffb62';

const ProductShowcase = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <BannerShowcase mainColor={mainThemeColor} />
      </Box> 
    </>
  )
}

export default ProductShowcase