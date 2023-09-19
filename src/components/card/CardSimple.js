import React from 'react'
import { Box, Typography } from '@mui/material'

const CardSimple = (props) => {
  return (
    <Box sx={{ 
        p: 3,
        height: 'auto',
        background: '#080804',
        border: '1px solid #585724',
        borderRadius: '10px',
        '&:hover': {
            boxShadow: '0px 1px 6px 0px rgba(179, 175, 29, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset',
            transition: 'all 0.3s ease-in-out',
            
            '& > div:first-of-type': {  // Target the first child div (i.e., the inner box) of the hovered box
                transform: 'rotate(360deg)'
            }
        }
     }}>

        <Box sx={{
            height: 10,
            width: 10,
            boxShadow: '0px 1px 6px 0px rgba(179, 175, 29, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset',
            borderRadius: '5px',
            border: '1px solid #585724',
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#222217',
            transition: 'transform 0.8s', // Add transition property for smooth rotation
        }}>
            {props.icon}
        </Box>

        <Typography variant='body1' sx={{ mt: 2, fontWeight: 600, color: '#fff' }}>{props.heading}</Typography>
        <Typography variant="subtitle2"  sx={{ mt: 0.5, fontWeight: 300, color: '#c1c1c1', fontFamily: 'Oxygen' }}>{props.content}</Typography>
        
    </Box>
  )
}

export default CardSimple