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
        height: '120vh',  // <-- this makes sure the Box takes the full height of the viewport
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
          px: 20,
        }}
        >

            <Typography variant="h1" sx={{ textAlign: 'center', fontSize: 50, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${props.mainColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Intergate ChatLegalBot In Your Site</Typography>
            <Box sx={{ mt: 2 }} />
            <Box sx={{
                height: 'auto',
                px: {xs: 2, sm: 5, md: 10, lg: 17, xl: 40},
                mb : 2,
                mt: 0.5
            }}>
                <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontSize: 15, fontFamily: 'Oxygen' }}>
                We're here to help you out in integrating the chatbot in your website. Follow the instructions.
                </Typography>
            </Box>

          <Cdn />

          <CdnCarousel />

        </Box>

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            flexDirection: 'column',
            mt: 4,
            px: 20,
          }}
        >
          <Typography variant='h6'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontFamily: 'Oxygen' }}>
          Need help installing ChatLegalBot on your website? Schedule an appointment with our support team for expert assistance.
          </Typography>
          <Button sx={{ mt: 2, position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, width: '200px', '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth component={Link} to="/pricing">GET ASSISTANCE</Button>
        </Box>


    </Box>
)
}

export default BannerShowcase