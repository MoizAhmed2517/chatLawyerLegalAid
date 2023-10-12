import * as React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import profileImage from '../../static/logo/profilepic.jpg';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import CircleIcon from '@mui/icons-material/Circle';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

// Material UI elements
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import logo from '../../static/logo/WhiteMiddleDark.png'
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: '1px solid #585724',
  background: "linear-gradient(to bottom, #0a0a0a, #000000)",
  "&:hover": {
    background: 'linear-gradient(to bottom, #0a0a0a, #000000)'
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  background: "linear-gradient(to bottom, #0a0a0a, #000000)",
  borderRight: '1px solid #585724',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const settings = [
  // {name: 'My profile', link: '/my-profile'}, 
  {name: 'Logout', link: '/login'},
];

const activeTabColor = ['#fffb62']
const iconColor = ['#fff', '#04951d', '#7f0495', '#6c6c6c', '#a30e0e', '#ffb100' ]

const NavbarDashboard = (props) => {
  const theme = useTheme();
  const timeoutRef = React.useRef(null);

  // States 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);
  const [tabColor, setTabColor] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeTabColors, setActiveTabColors] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  console.log(activeTab)

  // State functions and mapping functions
  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleOpenSettings = (event) => {
      setAnchorElSetting(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };

  const handleCloseSettings = (event) => {
      setAnchorElSetting(null);
  };

  const handleTabClick = (index) => {
      setActiveTab(index);
  };

  const handleTabClickMobile = (index) => {
      setActiveTab(index);
      setAnchorElNav(null);
  };

  const handleNavColor = (event, index) => {
      setTabColor(index);
  } 

  const handleActiveTabColor = (event, index) => {
      setActiveTabColors(index);
  }

  const handleIconColor = (event, index) => {
      Cookies.set('IconColor', iconColor[index])
  }

  const handleMouseEnter = () => {
      setOpen(true);
    };
    
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
        setOpen(false);
        setCollapseOpen(false)
    }, 200);
    
  };
    
  const handleMouseMove = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleExpand = (index) => {
    setActiveTab(index);
    setCollapseOpen(!collapseOpen);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ background: 'linear-gradient(195deg, #0a0a0a, #101010)', height: '60px' }}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=> setOpen(!open)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          {/* App bar main icon -- desktop */}
          <Link to="/">
              <Box
                component="img"
                sx={{
                    height: "153px",
                    display: { xs: 'flex', color: '#000' },
                }}
                alt="Wavelogo"
                src={logo}
            />
          </Link>

          {/* App bar main icon -- mobile */}
          <Typography
              variant="h5"
              noWrap
              sx={{
              ml: 4,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
              justifyContent: { xs: 'center' },
              }}
          >
          SURVEYOR
          </Typography>

          <Box sx={{ marginLeft: 'auto' }}>

              {/* <Tooltip title="Settings">
              <IconButton onClick={handleOpenSettings} size="large" padding={2} >
                  <SettingsIcon sx={{ maxWidth: '20px', height: '20px', padingLeft:2, color: '#FFFFFF' }} />
              </IconButton>
              </Tooltip> */}

              <Tooltip title="John DeSouza">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 'auto' }}>
                  <Avatar alt="Moiz Ahmed" src={profileImage} />
              </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px',
                  '.MuiPaper-root':{
                    background: '#303025',
                    border: '1px solid #585724',
                    color: '#fff'
                  },
                  '&:active': {
                    color: '#fff'
                  }
              
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <ListItemIcon>
                        <PersonIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography textAlign="center" component={Link} to={setting.link} sx={{ textDecoration : 'None', color: "#fff" }}>{setting.name}</Typography>
                      </ListItemText>
                    </MenuItem>
                ))}
              </Menu>

          </Box>

        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <List>
          {/* Dashboard Tab */}
          <Tooltip title={"Dashboard"} placement='bottom-end'>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    mt: 2,
                    borderRight: 0 === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '',
                    borderRadius: 0,
                    color: 0 === activeTab ? activeTabColor[activeTabColors] : '#ffffff',
                    '&:hover':{
                      background: 'rgba(16, 16, 13, 0.8)',
                    }
                }}
                component={Link}
                to='/dashboard'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={() => handleTabClick(0)}
                >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 0 === activeTab ? activeTabColor[activeTabColors] : '#ffffff',
                    }}
                >
                    <PollOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" sx={{ opacity: open ? 1 : 0 }} component={Link} to='/dashboard' />
            </ListItemButton>
          </Tooltip>

          {/* Survey Tab */}
          <Tooltip title={"Chat History"} placement='bottom-end'>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.4,
                    borderRight: 1 === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '',
                    borderRadius: 0,
                    mt: 2,
                    color: 1 === activeTab ? activeTabColor[activeTabColors] : '#ffffff',
                    '&:hover':{
                      background: 'rgba(16, 16, 13, 0.8)',
                    }
                }}
                component={Link}
                to='/chatDetails'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={() => handleTabClick(1)}
                >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 1 === activeTab ? activeTabColor[activeTabColors] : '#ffffff',
                    }}
                >
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Chat History" sx={{ opacity: open ? 1 : 0 }} component={Link} to='/chatDetails' />
            </ListItemButton>
          </Tooltip>
          
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>

    </Box>
  );
}

export default NavbarDashboard