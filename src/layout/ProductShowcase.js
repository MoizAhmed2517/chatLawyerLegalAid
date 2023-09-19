import React from 'react'
import { Box } from '@mui/material'
import BannerShowcase from '../components/banner/BannerShowcase'
import Footer from './Footer';

const mainThemeColor = '#fffb62';

const ProductShowcase = () => {
  return (
    <>
      <BannerShowcase mainColor={mainThemeColor} />
      <Footer mainColor={mainThemeColor} />
    </>
  )
}

export default ProductShowcase