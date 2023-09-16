import { Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'

const mainThemeColor = '#fffb62';

const Footerbanner = () => {
  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0c0c0c',
        borderTop: '1px solid #080804',
        pt: 12,
        pb: 12
     }}
    >

        <Typography 
            variant="h1" 
            sx={{ 
                fontSize: 40, 
                position: 'relative', 
                WebkitTextFillColor: 'transparent', 
                backgroundImage: `linear-gradient(to right, ${mainThemeColor}, #b1b1b1)`, 
                WebkitBackgroundClip: 'text', 
                zIndex: 2, 
                fontFamily: 'Lato' 
            }}
            >
                Integrate Now: Elevate Your Legal Practices
            </Typography>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt : 8
        }}>
            <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, width: '200px', '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth>Integrate</Button>
        </Box>
        
    </Box>
  )
}

export default Footerbanner