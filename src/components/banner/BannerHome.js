import { Box, Typography } from '@mui/material'
import React from 'react'
import bannerImage from '../../static/banner/mainbanner3.jpg';
import Navbar from '../navbar/Navbar';

const BannerHome = () => {
  return (
    <Box sx={{
        background: `url(${bannerImage}) center center/cover no-repeat`,
        height: '100%',
    }}
    >
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // This will reduce brightness (you can adjust the alpha value)
            backdropFilter: 'blur(0.2px)', // This will add a blur effect (you can adjust the pixel value)
            zIndex: 2,
        }} />

        <Navbar />
        <Typography sx={{ 
            color: 'white',
            fontSize: 50,
            zIndex: 2, // This will ensure the text appears on top of the overlay
            position: 'relative', // Required for zIndex to take effect
        }}>
            Moiz Ahme
        </Typography>
    </Box>
  )
}

export default BannerHome