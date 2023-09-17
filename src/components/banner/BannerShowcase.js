import { Box, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';
import Cdn from '../codeblock/Cdn';
import CdnCarousel from '../codeblock/CdnCarousel';

const mainThemeColor = '#fffb62';

const BannerShowcase = (props) => {
  return (
    <Box sx={{
        background: `#0c0c0c`,
        height: '100vh',  // <-- this makes sure the Box takes the full height of the viewport
        display: 'flex',  // <-- this ensures children can be centered vertically
        flexDirection: 'column',
        justifyContent: 'center', // <-- this centers children vertically
        position: 'relative',
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
        }} />

        <Navbar mainColor={props.mainColor} />

        <Box sx={{ 
          height: 'auto',
          background: '#0c0c0c',
          borderTop: '1px solid #0a0a0a',
          px: 20,
        }}
        >

            <Typography variant="h1" sx={{ textAlign: 'center', fontSize: 50, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${props.mainColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Intergate ChatLegalAid In Your Site</Typography>
            <Box sx={{ mt: 2 }} />
            <Box sx={{
                height: 'auto',
                px: {xs: 2, sm: 5, md: 10, lg: 17, xl: 40},
                mb : 2,
                mt: 0.5
            }}>
                <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontSize: 15, fontFamily: 'Oxygen' }}>
                We're here to help you out in integrating the chatbot in tou website. Follow the instructions.
                </Typography>
            </Box>

          <Cdn />

          <CdnCarousel />

        </Box>


    </Box>
)
}

export default BannerShowcase