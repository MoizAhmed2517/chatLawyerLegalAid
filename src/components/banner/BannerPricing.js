import { Box, Typography, Stack, Button, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';
import CardSwitch from '../card/CardSwitch';
import CardPrice from '../card/CardPrice';

const proffesionalPlan = [
    'Personalized Dashboard with client information, case overview, document repository, appointment scheduler, and messaging center',
    'Includes up to 5,000 messages per month (300 chat sessions)',
    'Comprehensive ChatLegalAid hosting',
    'Installation, and support',
    'Perfect for those seeking an efficient legal assistant'
]

const enterprisePlan = [
    'Personalized Dashboard with client information, case overview, document repository, appointment scheduler, and messaging center',
    'Unlimited users and up to 10,000 messages per month (600 chat sessions)',
    'Full ChatLegalAid hosting',
    'Installation, and support',
    "Ideal for expanding your legal practice's capabilities"
];

const BannerPricing = (props) => {
  return (
    <Box sx={{
        background: `#0c0c0c`,
        height: {xs: 'auto', xl: '100vh'},  // <-- this makes sure the Box takes the full height of the viewport
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 2,
        }}>

        
            <Typography variant="h1" sx={{ fontSize: 50, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${props.mainColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Choose Your Pricing Plan</Typography>
            <Box sx={{ mt: 2 }} />
            <Box sx={{
                height: 'auto',
                px: {xs: 2, sm: 5, md: 10, lg: 17, xl: 40},
                mb : 2,
                mt: 0.5
            }}>
                <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontSize: 15, fontFamily: 'Oxygen' }}>
                All plans FREE for the first 30 days
                </Typography>
            </Box>

            <CardSwitch />

        </Box>

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            position: 'relative',
            zIndex: 2,
            height: 'auto',
            px: {xs: 30, xl: 65},
            mt: 4,
            pb: 8,
        }}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardPrice title="Professional" plan={proffesionalPlan} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardPrice title="Enterprise" plan={enterprisePlan} />
                </Grid>
            </Grid>

        </Box>

        



    </Box>
  )
}

export default BannerPricing