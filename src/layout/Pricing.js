import React from 'react'
import { Box } from '@mui/material'
import BannerPricing from '../components/banner/BannerPricing';
import Footer from './Footer';

const mainThemeColor = '#fffb62';

const Pricing = () => {
    return (
        <>
          <BannerPricing mainColor={mainThemeColor} />
          
          <Footer mainColor={mainThemeColor} />
        </>
    )
}

export default Pricing