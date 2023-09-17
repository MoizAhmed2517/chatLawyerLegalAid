import { Box, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#585724',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#585724',
        },
        '&:hover fieldset': {
            borderColor: '#585724',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#585724',
        },
    },

    // Styles for the text color to be white
    '& .MuiInputBase-input': {
        color: '#fff', // Text color
    },
    '& .MuiInputBase-input:hover': {
        color: '#fff', // Text color on hover
    },
    '& .MuiInputBase-input.Mui-focused': {
        color: '#fff', // Text color on focus
    },
    '& .MuiInputBase-input.Mui-active': {
        color: '#fff', // Text color on active
    },

    // Style label color to be white when input is not focused
    '& .MuiFormLabel-root': {
        color: '#fff', // Label color
    }
});

const mainThemeColor = '#fffb62';

const BannerContact = (props) => {
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        }}>

        
            <Typography variant="h1" sx={{ fontSize: 50, position: 'relative', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to right, ${props.mainColor}, #b1b1b1)`, WebkitBackgroundClip: 'text', zIndex: 2, fontFamily: 'Lato' }}>Contact the Pied Piper team</Typography>
            <Box sx={{ mt: 2 }} />
            <Box sx={{
                height: 'auto',
                px: {xs: 2, sm: 5, md: 10, lg: 17, xl: 40},
                mb : 2,
                mt: 0.5
            }}>
                <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, textAlign: 'center', fontSize: 15, fontFamily: 'Oxygen' }}>
                We're here to answer your questions and discuss the decentralized future of the internet. Let's talk!
                </Typography>
            </Box>

        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, px: 40 }}>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <CssTextField label="First name" id="firstname" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CssTextField label="Last Name" id="Lastname" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField label="Email Address" id="email" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField label="Message" id="message" fullWidth multiline rows={6} />
                </Grid>
                <Grid item xs={12}>
                    <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth>Submit</Button>
                </Grid>
            </Grid>
        </Box>

    </Box>
)
}

export default BannerContact