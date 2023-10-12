import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import logo from '../static/logo/WhiteMiddleDark.png';

function Copyright(props) {
    return (
        <Stack direction="row" spacing={0.5} sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Typography variant="body2" align="center" {...props} sx={{ color: '#fff', mt: 6 }}>{'Copyright © '}</Typography>
            <Typography variant='subtitle2' align='center' sx={{ color:'#fffb62', fontWeight: 300, }} component={Link} to="/"> ChatLegalBot</Typography>
            <Typography variant="body2" align="center" {...props} sx={{ color: '#fff', mt: 6 }}>{new Date().getFullYear()}</Typography>
        </Stack>
    );
  }
  
const defaultTheme = createTheme();

const SignIn = () => {

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
        <Container component="main" maxWidth="xs" >

                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <Link to="/">
                    <Box
                        component="img"
                        sx={{
                            height: '180px', // Set the height of the logo as needed
                        }}
                        alt="Wavelogo"
                        src={logo}
                        />
                    </Link>

                    <Typography variant="h5" sx={{ color:'#fffb62', fontWeight: 500, mt: -5 }}>
                    Sign in to ChatLegalBot
                    </Typography>

                    <Box 
                        component="form" 
                        onSubmit={handleSubmit} 
                        noValidate 
                        sx={{ 
                            mt: 3,
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
                        <Typography align="left" variant='body2' sx={{ color: '#fff' }}>Username or email</Typography>
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
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography align="left" variant='body2' sx={{ color: '#fff', mt: 2 }}>Password</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align="right" variant='body2' sx={{ color: '#fffb62', mt: 2 }}>Forgot Password?</Typography>
                            </Grid>
                        </Grid>
                        
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



                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, background: '#fffb62', color: '#000', '&:hover': { color: '#000', background: '#fffb62' } }}
                            component={Link}
                            to="/dashboard"

                        >
                            Sign In
                        </Button>

                    </Box>

                    <Box
                        sx={{ 
                            mt: 3,
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
                            <Typography variant='subtitle2' align='center' sx={{ color:'#fff', fontWeight: 300, }}>New to ChatLegalBot? </Typography>
                            <Typography variant='subtitle2' align='center' sx={{ color:'#fffb62', fontWeight: 300, }} component={Link} to="/signup"> Create an account</Typography>
                        </Stack>

                        

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
    );
}

export default SignIn