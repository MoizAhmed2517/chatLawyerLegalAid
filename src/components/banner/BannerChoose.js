import { Box, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';
import bannerImage from '../../static/banner/mainbanner9.jpg'

const BannerChoose = (props) => {
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

                
                <Typography variant="h1" sx={{ fontSize: 50, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${props.mainColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato', textAlign: 'center' }}>ChatLegalAid Can Revolutionize Your Legal Practice</Typography>
                <Box sx={{ mt: 2 }} />

                
                <Box sx={{
                    height: 'auto',
                    px: {xs: 2, sm: 5, md: 10, lg: 17, xl: 40},
                    mb : 2,
                    mt: 0.5
                }}>
                    <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontSize: 15, fontFamily: 'Oxygen' }}>
                    ChatLegalAid is your all-in-one solution for divorce law. Our AI-driven chatbot combines cutting-edge technology with legal expertise to 
                    provide a seamless experience for lawyers and clients alike. From real-time case assessments and multilingual support to document preparation
                    and appointment scheduling, ChatLegalAid streamlines every aspect of the divorce process. Say goodbye to the complexities and hello to a more 
                    efficient and cost-effective legal journey
                    </Typography>
                </Box>

                <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
                    <Button sx={{ position: 'relative', zIndex: 2, color: '#fff', borderColor: `${props.mainColor}`, width: '200px', '&:hover': { borderColor: `${props.mainColor}` }}} variant="outlined" size="large" fullWidth component={Link} to="/live-demo">Live Demo</Button>
                </Stack>
            </Box>

        </Box>
    )
}

export default BannerChoose