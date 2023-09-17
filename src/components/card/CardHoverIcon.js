import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

const mainThemeColor = '#fffb62';

const CardHoverIcon = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card sx={{ 
                width: 150,
                height: 150, 
                borderRadius: '50%',
                mt: 2,
                mb: 2,
                boxShadow: "none",
                border: '1px solid #585724',
                transition: 'transform 0.3s ease',
                background: '#080804',
                    '&:hover': {
                        width: 150,
                        height: 150,
                        transform: 'scale(1.03)',
                        transition: 'transform 0.25s ease-in-out',
                        boxShadow: "0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)",
                        color: `${mainThemeColor}`,
                        boxShadow: '0px 1px 6px 0px rgba(179, 175, 29, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset'
                    },
                    '&:hover:not(:hover)': {
                        transform: 'scale(1)',
                    },
            }}
            >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2.2, color: 'rgb(255 255 255 / 78%)', '&:hover' :  {color: `${mainThemeColor}`} }}>
                    {props.icon}
                </CardContent>
            </Card>
            <Typography variant='button' sx={{ textAlign: 'center', fontSize: 14, color: '#fff', textTransform: 'none', fontWeight: 500, }}>
                {props.text}
            </Typography>
            <Typography variant='button' sx={{ textAlign: 'center', fontSize: 12, color: '#fff', textTransform: 'none', font: "Oxygen", fontWeight: 300, }}>
            {props.descr}
            </Typography>
        </Box>
    );
}

export default CardHoverIcon