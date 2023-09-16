import React from 'react'
import BannerHome from '../components/banner/BannerHome';
import { Box, Grid, Typography, Button } from '@mui/material';

import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CardSimple from '../components/card/CardSimple';
import Footer from './Footer';
import Carousel from '../components/carousel/Carousel';
import Footerbanner from '../components/banner/Footerbanner';

const mainThemeColor = '#fffb62';

const Home = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <BannerHome />
      </Box>

      <Box sx={{ 
        height: 'auto',
        background: '#0c0c0c',
        borderTop: '1px solid #0a0a0a',
        px: 17,
        pt : 10,
        pb: 4,
      }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>A <span style={{ color: `${mainThemeColor}` }}>delightful experience</span></Typography>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>waiting for you. Get <span style={{ color: `${mainThemeColor}` }}> premium access </span> today!</Typography>
        </Box>
        <Carousel />

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, width: '200px', '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth>Learn More</Button>
        </Box>
      
      </Box>

      <Box sx={{ 
        height: 'auto',
        background: '#0c0c0c',
        borderTop: '1px solid #0a0a0a',
        px: 17,
        pt : 10,
        pb: 10,
      }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>A <span style={{ color: `${mainThemeColor}` }}>delightful experience</span></Typography>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>waiting for you. Get <span style={{ color: `${mainThemeColor}` }}> premium access </span> today!</Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={3}>
            <CardSimple heading="Efficiency" content="Reduce manual work and increase productivity." icon={<HandymanOutlinedIcon sx={{ color: '#fff' }} />} />
          </Grid>
          <Grid item xs={3}>
            <CardSimple heading="Efficiency" content="Reduce manual work and increase productivity." icon={<HandymanOutlinedIcon sx={{ color: '#fff' }} />} />
          </Grid>
          <Grid item xs={3}>
            <CardSimple heading="Efficiency" content="Reduce manual work and increase productivity." icon={<HandymanOutlinedIcon sx={{ color: '#fff' }} />} />
          </Grid>
          <Grid item xs={3}>
            <CardSimple heading="Efficiency" content="Reduce manual work and increase productivity." icon={<HandymanOutlinedIcon sx={{ color: '#fff' }} />} />
          </Grid>
        </Grid>
      
      </Box>

      <Footerbanner />

      <Box sx={{ 
        height: 'auto',
        background: '#10100d',
        borderTop: '1px solid #0a0a0a',
        boxShadow: '1px 1px 1px 1px black',
        px: 17,
        pt: 3,
        pb: 2.5,
      }}>
          <Footer mainColor={mainThemeColor} />
          
      </Box>

      

    </>
  )
}

export default Home