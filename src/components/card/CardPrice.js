import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import { ListItemButton } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';


const mainThemeColor = '#fffb62';

const proffesionalPlan = [
    'Personalized Dashboard with client information, case overview, document repository, appointment scheduler, and messaging center',
    'Includes up to 5,000 messages per month (averaging 300 chat sessions)',
    'Comprehensive ChatLegalAid hosting',
    'Installation, and support',
    'Perfect for those seeking an efficient legal assistant'
]

const CardPrice = (props) => {
    return (
        <Card variant="outlined" sx={{ minWidth: 275, background: '#080804', border: '1px solid #585724' }}>

          <CardContent>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                flexDirection: 'column',
            }}>   
                <Typography sx={{ color: '#fffb62' }} color="text.secondary" gutterBottom variant="h4">
                {props.title}
                </Typography>

                <Typography variant="h5" component="div" sx={{ color: '#fff', fontSize: '40px', fontWeight: 800 }}>
                    <sup style={{ fontWeight: 400, fontSize: 20 }}>$ </sup>
                    299
                    <sub style={{ fontWeight: 400, fontSize: 12 }}>/month</sub>
                </Typography>
            </Box>


            <List>

                {
                    props.plan.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <DoneOutlinedIcon sx={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} sx={{ color: '#fff' }} />
                        </ListItem>

                    ))
                } 
            </List>


            
          </CardContent>

          <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4  }}>
            <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, width: '200px', '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth>Choose Plan</Button>
          </CardActions>

        </Card>
      );
  
}

export default CardPrice