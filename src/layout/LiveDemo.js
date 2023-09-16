import React from 'react'
import { Box } from '@mui/material';
import BannerLiveDemo from '../components/banner/BannerLiveDemo'

const mainThemeColor = '#fffb62';


const LiveDemo = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <BannerLiveDemo mainColor={mainThemeColor} />
      </Box> 
    </>
  )
}

export default LiveDemo