import React, {useRef} from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import BannerAboutus from '../components/banner/BannerAboutus'
import CardStylish from '../components/card/CardStylish';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import Footer from './Footer';
import { Link } from 'react-router-dom';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TranslateIcon from '@mui/icons-material/Translate';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';

const mainThemeColor = '#fffb62';

const AboutUs = () => {
  const sectionToScrollTo = useRef(null);
  const scrollToSection = () => {
    if (sectionToScrollTo.current) {
      sectionToScrollTo.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <BannerAboutus scrollToSection={scrollToSection} />
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
            height: 'auto',
            background: 'linear-gradient(8deg, black, #0c0c0c)',
            borderTop: '1px solid #0a0a0a',
            px: 17,
            pt : 8,
            pb: 10,
          }}>

          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}> <span style={{ color: `${mainThemeColor}` }}>ChatLegalBot</span> can revolutionize</Typography>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>your <span style={{ color: `${mainThemeColor}` }}>legal</span> practices</Typography>
          <Typography variant="body1" sx={{ fontWeight: 400, color: `#fff`, mt:1 }}>ChatLegalBot is your one-stop solution, assisting you in advising as per you client's requirement</Typography>

          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={6}>
                <CardStylish heading="Comprehensive Support" content="ChatLegalBot offers comprehensive assistance, from understanding client needs to immediate case assessments." icon={<SupportAgentIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} >
                <CardStylish heading="Multilingual Accessibility" content="Our platform caters to a diverse clientele by providing support in multiple languages." icon={<TranslateIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="Time and Cost Efficiency" content="Streamline your practice and save valuable time and money with our automated tools and efficient processes." icon={<TimerOffIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="Expert Guidance" content="Access accurate and up-to-date legal advice at your fingertips, enhancing the quality of your legal services." icon={<PersonAddIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="Trusted Partnership" content="We are more than a tool; we are your legal partner, dedicated to simplifying the legal process for you and your clients." icon={<GroupsIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="Seamless Integration with your website" content="You can integrate via our CDN into your website" icon={<AccountTreeOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>
          </Grid>

      </Box>

      <Box ref={sectionToScrollTo}
      sx={{
        height: 'auto',
        background: 'linear-gradient(8deg, black, #0c0c0c)',
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
                  zIndex: 2,
                  position: 'relative',
              }}>
                  <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>Ready to  <span style={{ color: `${mainThemeColor}` }}>Elevate Your Legal Practice</span></Typography>
                  <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>with <span style={{ color: `${mainThemeColor}` }}>  ChatLegalBot </span> ?</Typography>
        </Box>

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 5,
            zIndex: 2,
            position: 'relative',
        }}>
        <Button sx={{ position: 'relative', zIndex: 2, boxShadow: 'none', color: '#fff', borderColor: `${mainThemeColor}`, width: '200px', '&:hover': { borderColor: `${mainThemeColor}`, background: `#10100d` } }} variant="outlined" size="large" fullWidth component={Link} to="/pricing">Learn More</Button>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          zIndex: 2,
          position: 'relative',
        }}>
          <Typography variant="body1" sx={{ fontWeight: 400, color: `#fff`, mt:5}}>Take Advantage of Our 30-Day Free Trial and Experience the Future of Legal Assistance!</Typography>
        </Box>

      </Box>

      <Footer mainColor={mainThemeColor} />

    </>
  )
}

export default AboutUs