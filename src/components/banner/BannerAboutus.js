import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar';
import AboutVideo from '../video/AboutVideo';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import './BannerSectionAnimation.css';

const mainThemeColor = '#fffb62';

const BannerAboutus = ({ scrollToSection }) => {
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

            <Navbar mainColor={mainThemeColor} />


            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box sx={{
                        pt: {xs: 3, sm: 5, md: 10, lg: 10, xl: 20},
                        px: {xs: 3, sm: 5, md: 10, lg: 10, xl: 20,}
                    }}>
                        <Typography variant="h1" sx={{ fontSize: 60, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${mainThemeColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Simplifying Legal Landscape</Typography>
                        <Box sx={{ mt: 2 }} />
                        <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, fontSize: 15, fontFamily: 'Oxygen', textAlign: 'justify' }}>
                            At ChatLegalAid, we are passionate about leveraging technology to simplify the legal landscape. 
                            Our team of legal experts and AI enthusiasts has come together to create a revolutionary chatbot designed 
                            to transform the way divorce lawyers and their clients navigate the complexities of divorce proceedings.
                            With a commitment to accessibility, efficiency, and legal excellence, we are your trusted partner 
                            in the legal journey
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{
                        pt: {xs: 3, sm: 5, md: 10, lg: 5},
                        px: {xs: 3, sm: 5, md: 10, lg: 5, xl: 10},
                        ml: -4,
                    }}>
                        <AboutVideo />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: {xs: 8, xl: 18},
            }}
            onClick={scrollToSection}
            >
                <ExpandCircleDownOutlinedIcon className='bounce' sx={{ height: 70, width: 70, color: '#FFFFFF', zIndex: 2, position: 'relative' }}/>
            </Box>

        </Box>
      )
}

export default BannerAboutus