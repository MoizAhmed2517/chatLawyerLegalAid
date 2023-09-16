import React from 'react'
import { Box } from '@mui/material'
import BannerPricing from '../components/banner/BannerPricing';

const mainThemeColor = '#fffb62';

const Pricing = () => {
    return (
        <>
          <Box sx={{
            height: '100vh',
          }}>
            <BannerPricing mainColor={mainThemeColor} />
          </Box> 
        </>
    )
}

export default Pricing