import React from 'react';

// Material UI Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Material UI components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Tooltip, Box, Grid, Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import DeleteDialog from '../dialog/DeleteDialog';

const drawerWidth = 400;

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: '#FF0065',
        color: '#fff'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const ChatCard = (props) => {

    const [state, setState] = React.useState(false);
    const [name, setName] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(false);
        // setName(name);
        // setPhone(phone);
    };

    const handleView = () => {
        setState(true);
    };

    const handleDelete = () => {
        setOpen(true)
    };

    const list = (user, chatbot, date, time) => (

        <Box
          sx={{ width: drawerWidth, zIndex: 2, background: '#303025', border: '1px solid #585724' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
    
          <Box sx={{
            background: 'yellow',
            height: '50px',
            px: 3,
            py: 3,
            position: 'sticky',
            zIndex: 1,
            top: 0,
            border: '1px solid #585724'
          }}>
            
            <Grid container >
                {name && (
                    <React.Fragment>
                        <Grid item xs={2} sx={{ mt: 0.5 }}>
                            <Avatar {...stringAvatar(name)} />
                        </Grid>
                        <Grid item xs={9}>
                            <Stack direction="column">
                                <Typography variant="body1" sx={{ fontFamily: 'Filson Pro Bold' }}>{name}</Typography>
                                <Typography variant="body1" sx={{ fontFamily: 'Filson Pro Light' }}>{phone}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={1} marginTop={0.2} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <MoreVertIcon sx={{ height: 40, width: 40, color: "#bdbdbd" }} />
                        </Grid>
                    </React.Fragment>
                )} 
            </Grid>
    
          </Box>
    
          <Box sx={{
            overflowY: 'scroll',
            mt: 3,
            px: 5,
            flex: 1,
            background: '#303025',
          }}>
    
            {
                Array.from({ length: 3}).map((_, index) => (
                    <React.Fragment key={index}>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            mb: 2,
                        }}>
    
                            <Box sx={{ 
                                p: 2,
                                background: 'rgba(225, 224, 33, 1)',
                                width: '50%',
                                height: 'auto',
                                borderRadius: '20px',
                                mt: 2,
                            }}>
    
                                <Typography variant="body2" sx={{ color: '#fff' }}>
                                    Hi! I'm Chat Lawyer. How can I help you?
                                </Typography>
    
                            </Box>
                            <Typography variant="caption" sx={{ fontSize: '10px', ml: 0.2 }}>
                                <span style={{  color: "#fff" }}>
                                    {date}
                                </span>
                                <CircleIcon sx={{ height: 6, width: 6, mt: 1, ml: 0.5, mr: 0.5, color: "rgba(225, 224, 33, 1)" }} />
                                <span style={{  color: "#fff" }}>
                                    {time}
                                </span>
                            </Typography>
                        </Box>

                        <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end'
                                }}>
                                    <Box sx={{ 
                                        p: 2,
                                        background: '#E3E3E3',
                                        width: '50%',
                                        height: 'auto',
                                        borderRadius: '20px'
                                    }}>
    
                                        <Typography variant="body2" sx={{ color: '#000', fontFamily: 'Filson Pro Regular' }}>
                                            I want to learn about divorce laws in Florida
                                        </Typography>
    
                                    </Box>
    
                                    <Typography variant="caption" sx={{ fontSize: '10px' }}>
                                        <span style={{  fontFamily: 'Filson Pro Light', color: "#949494" }}>
                                            {date}
                                        </span>
                                        <CircleIcon sx={{ height: 6, width: 6, mt: 1, ml: 0.5, mr: 0.5, color: "rgba(225, 224, 33, 1)" }} />
                                        <span style={{  fontFamily: 'Filson Pro Medium', color: "#929292"  }}>
                                            {time}
                                        </span>
                                    </Typography>
    
                        </Box>
    
                        
                    </React.Fragment>
                ))
            }
    
          </Box>
    
        </Box>
    
    );

    return (
        <React.Fragment>

            <Card sx={{ 
                maxWidth: 400,
                maxHeight: 150,
                background: '#30302582',
                border: '1px solid #585724',
                color: '#fff',
                '&:hover': {
                    boxShadow: '0px 1px 6px 0px rgba(179, 175, 29, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset',
                        },
                    }}
                >
                <CardHeader
                sx={{ color: '#fff', fontSize: "25px" }}
                avatar={
                    <Avatar alt="Alia" src="/" sx={{ background: '#ffd300' }} />
                }
                action={
                    <Chip icon={<MessageOutlinedIcon sx={{ color: '#fff' }} />} label="40+" variant="outlined" size="small" sx={{ marginLeft: 'auto', paddingLeft: 1, color: '#fff', border: '1px solid #585724' }}/>
                }
                title={props.title}
                subheader={props.date}
                subheaderTypographyProps={{ color: 'inherit' }}
                />

                {/* <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.descr}
                </Typography>
                </CardContent> */}

                <CardActions disableSpacing>

                    <Tooltip title="Delete Chat">
                        <IconButton aria-label="add to favorites" onClick={handleDelete}>
                            <DeleteOutlineOutlinedIcon sx={{ color: '#fff' }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="View Chat">
                        <IconButton aria-label="share" onClick={handleView}>
                            <VisibilityOutlinedIcon sx={{ color: '#fff' }} />
                        </IconButton>
                    </Tooltip>
                
                </CardActions>

            </Card>

            <Drawer
                anchor='right'
                open={state}
                onClose={toggleDrawer(false)}
                sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth, 
                    borderRadius: '31px 0 0 31px', 
                    background: "#FFFFFF",
                    boxShadow: '-10px 0px 6px #00000029',
                    border: '1px solid #707070',
                },
                }}
            >
                {list("User", "Person", "Sept 7th", "5:03 pm")}
            </Drawer>

            <DeleteDialog open={open} setOpen={setOpen} />


        </React.Fragment>
    );
}

export default ChatCard