import { Grid, Typography, Stack } from '@mui/material'
import React from 'react'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = (props) => {
    return (
        <Grid container>
            <Grid item xs={9}>
    
                <Stack direction="row">
    
                    <HeadsetMicIcon sx={{ display: { xs: 'flex' }, color: `${props.mainColor}`, mr: 1, mt: -0.5, height: 35, width: 35 }} />
                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.15rem',
                        color: `${props.mainColor}`,
                        textDecoration: 'none',
                    }}
                    >
                    CHATBOT LOGO
                    </Typography>
    
                    <Stack direction="row" spacing={0.6} sx={{ mt: 0.8 }}>
    
                        <Typography variant="body2" align="center" sx={{ color: '#fff' }}>{'Copyright © '}</Typography>
                        <Typography variant='body2' align='center' sx={{ color: `${props.mainColor}`, fontWeight: 300, }} component={Link} to="/"> ChatLawyer</Typography>
                        <Typography variant="body2" align="center" sx={{ color: '#fff'}}>{new Date().getFullYear()}</Typography>
    
                    </Stack>
                </Stack>
    
            </Grid>
    
            <Grid item xs={3} sx={{ display: 'flex', alignItems: 'right', justifyContent: 'flex-end' }}>
    
                <Stack direction="row" spacing={2}>
    
                    <GoogleIcon sx={{ color: '#fff' }} />
                    <FacebookIcon sx={{ color: '#fff' }} />
                    <GitHubIcon sx={{ color: '#fff' }} />
                    <TwitterIcon sx={{ color: '#fff' }} />
                    <LinkedInIcon sx={{ color: '#fff' }} />
    
    
                </Stack>
    
            </Grid>
        </Grid>
      )
}

export default Footer