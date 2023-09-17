import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import '../App.css'

function Copyright(props) {
    return (
        <Stack direction="row" spacing={0.5} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Typography variant="body2" align="center" {...props} sx={{ color: '#fff', mt: 6 }}>{'Copyright © '}</Typography>
            <Typography variant='subtitle2' align='center' sx={{ color:'#fffb62', fontWeight: 300, }} component={Link} to="/"> ChatLegalAid</Typography>
            <Typography variant="body2" align="center" {...props} sx={{ color: '#fff', mt: 6 }}>{new Date().getFullYear()}</Typography>
        </Stack>
    );
  }
  
const defaultTheme = createTheme();

const SignUp = () => {

    React.useEffect(() => {
        // Save the previous background color
        const prevBackgroundColor = document.body.style.backgroundColor;

        // Set the background color to black when the component mounts
        document.body.style.backgroundColor = '#0c0c0c';

        // Revert the background color back to its previous state when the component unmounts
        return () => {
            document.body.style.backgroundColor = prevBackgroundColor;
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };
    
    return (
        <ThemeProvider theme={defaultTheme} >
            <Container component="main" maxWidth="xs">

                    <Box
                        sx={{
                        mt: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        <Box component={Link} to="/">
                            <HeadsetMicIcon sx={{ color: '#fff', width: 60, height: 60, mb: 1, color:'#fffb62' }} />
                        </Box>

                        <Typography variant="h5" sx={{ color:'#fffb62', fontWeight: 500, }}>
                            Sign up for ChatLegalAid
                        </Typography>

                        <Box 
                            component="form" 
                            onSubmit={handleSubmit} 
                            noValidate 
                            sx={{ 
                                mt: 1,
                                background: '#080804',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '30%',
                                width: '80%',
                                border: '1px solid #585724',
                                borderRadius: '10px',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderRadius: '10px',
                                transition: '0.3s',
                                p: 2,
                            }}
                        >
                            {/* Username */}
                            <Typography align="left" variant='body2' sx={{ color: '#fff' }}>Username</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                size="small"
                                sx={{ 
                                    mt: 0.3,
                                    color: '#fff',
                                    '& .MuiOutlinedInput-input': { // change color of input text
                                        color: '#fff',  // specify your color here
                                    },
                                    '& .MuiOutlinedInput-root': { // for MUI version 5
                                        '& fieldset': {
                                            borderColor: '#585724',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#585724'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#585724', // on hover
                                        },
                                    }

                                }}
                            />

                            {/* Email */}
                            <Typography align="left" variant='body2' sx={{ color: '#fff' }}>Email</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                size="small"
                                sx={{ 
                                    mt: 0.3,
                                    color: '#fff',
                                    '& .MuiOutlinedInput-input': { // change color of input text
                                        color: '#fff',  // specify your color here
                                    },
                                    '& .MuiOutlinedInput-root': { // for MUI version 5
                                        '& fieldset': {
                                            borderColor: '#585724',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#585724'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#585724', // on hover
                                        },
                                    }

                                }}
                            />

                            {/* Password */}
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography align="left" variant='body2' sx={{ color: '#fff', mt: 1 }}>Password</Typography>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        size="small"
                                        sx={{ 
                                            mt: 0.3,
                                            color: '#fff',
                                            '& .MuiOutlinedInput-input': { // change color of input text
                                                color: '#fff',  // specify your color here
                                            },
                                            '& .MuiOutlinedInput-root': { // for MUI version 5
                                                '& fieldset': {
                                                    borderColor: '#585724',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#585724'
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#585724', // on hover
                                                },
                                            }

                                        }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography align="left" variant='body2' sx={{ color: '#fff', mt: 1 }}>Retype Password</Typography>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        size="small"
                                        sx={{ 
                                            mt: 0.3,
                                            color: '#fff',
                                            '& .MuiOutlinedInput-input': { // change color of input text
                                                color: '#fff',  // specify your color here
                                            },
                                            '& .MuiOutlinedInput-root': { // for MUI version 5
                                                '& fieldset': {
                                                    borderColor: '#585724',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#585724'
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#585724', // on hover
                                                },
                                            }

                                        }}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 0.5, background: '#fffb62', color: '#000', '&:hover': { color: '#000', background: '#fffb62' } }}
                                component={Link}
                            >
                                Create Account
                            </Button>

                        </Box>

                        <Box 
                            sx={{ 
                                mt: 0.5,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '30%',
                                width: '80%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                            }}
                        >
                            <Typography variant="subtitle1"  sx={{ color:'#8d8d8d', fontWeight: 350 }}>or signup via</Typography>
                            <Stack direction="row" spacing={2} sx={{ mt: 0.5 }}>

                                <GoogleIcon sx={{ color: '#8d8d8d', width: 40, height: 40 }} />
                                <MicrosoftIcon sx={{ color: '#8d8d8d', width: 40, height: 40 }} />

                            </Stack>
                        </Box>

                        <Box
                            sx={{ 
                                mt: 0.5,
                                background: '#080804',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '30%',
                                width: '80%',
                                border: '1px solid #585724',
                                borderRadius: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                transition: '0.3s',
                                p: 2,
                            }}
                        >

                            <Stack direction="row" spacing={0.5}>
                                <Typography variant='subtitle2' align='center' sx={{ color:'#fff', fontWeight: 300, }}>Already have account? </Typography>
                                <Typography variant='subtitle2' align='center' sx={{ color:'#fffb62', fontWeight: 300 }} component={Link} to="/login"> SignIn</Typography>
                            </Stack>

                            

                        </Box>

                    </Box>
                    <Copyright />
            </Container>
        </ThemeProvider>
    );
}

export default SignUp