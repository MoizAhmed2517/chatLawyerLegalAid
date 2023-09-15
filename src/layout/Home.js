import React from 'react'
import BannerHome from '../components/banner/BannerHome';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{
      height: '100vh',
    }}>
      <BannerHome />
      <BannerHome />
    </Box>
  )
}

export default Home