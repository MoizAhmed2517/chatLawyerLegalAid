import { Box, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';

const BannerContact = (props) => {
  return (
    <Box sx={{
        background: `#10100d`,
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
        }} />

        <Navbar mainColor={props.mainColor} />

        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // pt: {xs: 3, sm: 5, md: 10, lg: 10, xl: 30},
        py: {xs: 3, sm: 5, md: 10, lg: 20, xl: 40}
    }}>

        
        <Typography variant="h1" sx={{ fontSize: 50, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${props.mainColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Working In Progress. Stay Tuned!</Typography>
        <Box sx={{ mt: 2 }} />

        
        <Box sx={{
            height: 'auto',
            px: {xs: 2, sm: 5, md: 10, lg: 17, xl: 40},
            mb : 2,
            mt: 0.5
        }}>
            <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontSize: 15, fontFamily: 'Oxygen' }}>
                At Chat Legal Aid, we've transformed the way divorce lawyers and their clients approach divorce proceedings. 
                Our AI-powered chatbot is your indispensable legal partner, equipped to provide extensive support, guide clients through the process, 
                gather crucial information, and even schedule appointments on your behalf. With ChatLegalAid, you have a true ally, streamlining your 
                practice and ensuring your clients have all the information they need.
            </Typography>
        </Box>

        <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
            <Button sx={{ position: 'relative', zIndex: 2, color: '#fff', borderColor: `${props.mainColor}`, width: '200px', '&:hover': { borderColor: `${props.mainColor}` }}} variant="outlined" size="large" fullWidth component={Link} to="/">Home</Button>
        </Stack>
    </Box>

    </Box>
)
}

export default BannerContact