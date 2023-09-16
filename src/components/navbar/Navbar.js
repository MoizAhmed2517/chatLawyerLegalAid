import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// Material ui components
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Icon
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

const pages = [
  {label: 'About Us', to: '/about-us'},
  {label: 'Why Choose Us?', to: '/why-choose-us'},
  {label: 'Product Showcase', to: '/product-showcase'},
  {label: 'Pricing', to: '/pricing'},
  {label: 'Live Demo', to: '/live-demo'},
  {label: 'Contact Us', to: '/contact-us'},
];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [scrolled, setScrolled] = useState(false);
  const currentTabIndex = pages.findIndex(page => page.to === window.location.pathname);
  const [click, setClick] = useState(currentTabIndex !== -1 ? currentTabIndex : -1);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {  // You can adjust the value as per your needs
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleTabNavMenu = (index) => {
    setClick(index)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
                    component="a"
                    href="/"
                    noWrap
                    sx={{
                    ml: 8,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 1000,
                    letterSpacing: '.2rem',
                    color: `${props.mainColor}`,
                    textDecoration: 'none',
                    px: {xs: 'none', xl: 10}
                }}
            >
                CHATBOT LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignContent: 'center', justifyContent: 'center' }}>
              {pages.map((page, index) => (
                  <React.Fragment key={index}>
                    <Button
                      onClick={() => handleTabNavMenu(index)}
                      sx={{ color: 'white', display: 'block', borderBottom: click === index ? '1px solid yellow' : 'none', borderRadius: '0px' }}
                      component={Link} 
                      to={page.to}
                    >
                      <Typography variant="body1" sx={{ textTransform: 'capitalize', fontSize: 14, }}>{page.label}</Typography>
                    </Button>
                  </React.Fragment>
              ))}
            </Box>

            {/* App bar main icon -- mobile */}
            <Typography
              variant="h5"
              component="a"
              href="/"
              noWrap
              sx={{
                ml: 2,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignContent: 'center',
                textAlign: 'center',
                fontFamily: 'monospace',
                fontWeight: 1000,
                letterSpacing: '.2rem',
                color: `${props.mainColor}`,
                textDecoration: 'none',
              }}
            >
              CHATBOT LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: "flex-end" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu} component={Link} to={page.to}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ marginLeft: 'auto', display:{ xs: 'none', md: 'block' }, px: {xs: 'none', xl: 18} }}>
                <Button sx={{ mr: 2, color: '#fff' }} component={Link}>Log in</Button>
                <Button disableRipple sx={{ borderRadius: 32, boxShadow: 'none', color: '#000', mr: { xs: 2, md: 8}, bgcolor: `${props.mainColor}`, '&:hover': { bgcolor: `${props.mainColor}` } }} variant="contained" component={Link}>SignUp</Button>
            </Box>

            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar