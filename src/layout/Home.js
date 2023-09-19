import React from 'react'
import BannerHome from '../components/banner/BannerHome';
import { Box, Grid, Typography, Button } from '@mui/material';

import Diversity3Icon from '@mui/icons-material/Diversity3';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ShieldIcon from '@mui/icons-material/Shield';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import CardSimple from '../components/card/CardSimple';
import Footer from './Footer';
import Carousel from '../components/carousel/Carousel';
import Footerbanner from '../components/banner/Footerbanner';
import { Link } from 'react-router-dom';

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
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>Accelerate your  <span style={{ color: `${mainThemeColor}` }}>Legal Practices </span></Typography>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>in just <span style={{ color: `${mainThemeColor}` }}> Three </span> simple steps</Typography>
        </Box>
        <Carousel />

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
        }}>
            <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#000', bgcolor: `${mainThemeColor}`, width: '200px', '&:hover': { bgcolor: `${mainThemeColor}` } }} variant="contained" size="large" fullWidth component={Link} to="/product-showcase">Learn More</Button>
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
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>A <span style={{ color: `${mainThemeColor}` }}>Delightful Experience</span></Typography>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>waiting for you. Get <span style={{ color: `${mainThemeColor}` }}> Premium Access </span> today!</Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={3}>
            <CardSimple heading="Efficiency" content="Boost productivity and minimize manual tasks with ChatLegalBot." icon={<StackedLineChartIcon sx={{ color: '#fff' }} />} />
          </Grid>
          <Grid item xs={3}>
            <CardSimple heading="Accuracy" content="Guarantee meticulous data handling and compilation with ChatLegalBot." icon={<AdsClickIcon sx={{ color: '#fff' }} />} />
          </Grid>
          <Grid item xs={3}>
            <CardSimple heading="Security" content="Rest easy with ChatLegalBot's commitment to data security and privacy compliance." icon={<ShieldIcon sx={{ color: '#fff' }} />} />
          </Grid>
          <Grid item xs={3}>
            <CardSimple heading="User-Friendly" content="Simplify management with ChatLegalBot's intuitive admin interface." icon={<Diversity3Icon sx={{ color: '#fff' }} />} />
          </Grid>
        </Grid>
      
      </Box>

      <Footerbanner />

      <Footer mainColor={mainThemeColor} />

      

    </>
  )
}

export default Home