import { Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import bannerImage from '../../static/banner/mainbanner9.jpg';
import Navbar from '../navbar/Navbar';
import TypingFont from '../animation/TypingFont';
import { Link } from 'react-router-dom';


const mainThemeColor = '#fffb62';

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
        <Navbar mainColor={mainThemeColor} />


        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            pt: {xs: 3, sm: 5, md: 10, lg: 10, xl: 30},
        }}>

            
            <Typography variant="h1" sx={{ fontSize: 80, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to top, ${mainThemeColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Chat-Legal-Aid</Typography>
            <Box sx={{ mt: 2 }} />
            <TypingFont mainColor={mainThemeColor} />
            <Box sx={{ mt: 2 }} />
            <Typography variant="h5" sx={{position: 'relative', fontWeight: 400, color: "#fff", mt: 0.5, zIndex: 2, fontFamily: 'Oxygen' }}>Empowering Divorce Lawyers and Clients Alike</Typography>
            
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
                <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, width: '200px', '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth component={Link} to="/pricing">Start Free</Button>
                <Button sx={{ position: 'relative', zIndex: 2, color: '#fff', borderColor: `${mainThemeColor}`, width: '200px', '&:hover': { borderColor: `${mainThemeColor}` }}} variant="outlined" size="large" fullWidth component={Link} to="/contact-us">Contact Us</Button>
            </Stack>
        </Box>

    </Box>
  )
}

export default BannerHome