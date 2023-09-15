import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Icons

// Material ui components
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    console.log(trigger)
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };



const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {  // You can adjust the value as per your needs
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={{ backgroundColor: scrolled ? '#0a0a0a' : 'transparent' }}>
          <Toolbar>
            
            {/* App bar main icon -- desktop */}
            <Typography
                    variant="h5"
                    noWrap
                    sx={{
                    ml: 8,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 1000,
                    letterSpacing: '.2rem',
                    color: '#04abba',
                    textDecoration: 'none',
                }}
            >
                SURVEYOR
            </Typography>

            {/* App bar main icon -- mobile */}
            <Typography
                    variant="h5"
                    noWrap
                    sx={{
                    ml: 2,
                    display: { xs: 'fkex', md: 'none' },
                    fontFamily: 'monospace',
                    fontWeight: 1000,
                    letterSpacing: '.2rem',
                    color: '#04abba',
                    textDecoration: 'none',
                }}
            >
            SURVEYOR
            </Typography>

            <Box sx={{ marginLeft: 'auto' }}>

                <Button sx={{ mr: 2, color: '#fff' }} component={Link} to="/login">Log in</Button>
                <Button sx={{ boxShadow: 'none', color: '#fff', mr: { xs: 2, md: 8}, bgcolor: '#04abba', '&:hover': { bgcolor: '#04abba' } }} variant="contained" component={Link} to="/signup">SignUp</Button>

            </Box>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar