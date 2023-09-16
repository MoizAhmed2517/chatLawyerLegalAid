import React from 'react'
import BannerHome from '../components/banner/BannerHome';
import { Box, Grid, Typography } from '@mui/material';


import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CardSimple from '../components/card/CardSimple';
import CardStylish from '../components/card/CardStylish';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import Footer from './Footer';

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
        pb: 10,
      }}>

        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: `${mainThemeColor}`, mt: 5 }}> <BubbleChartIcon /> Why Choose Scrubworx?</Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>A <span style={{ color: `${mainThemeColor}` }}>delightful experience</span></Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>waiting for you. Get <span style={{ color: `${mainThemeColor}` }}> premium access </span> today!</Typography>

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

      <Box sx={{ 
        height: 'auto',
        background: 'linear-gradient(8deg, black, #0c0c0c)',
        borderTop: '1px solid #0a0a0a',
        px: 17,
        pt : 8,
        pb: 10,
      }}>

        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: `${mainThemeColor}`, mt: 5 }}> <BubbleChartIcon /> Features</Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>Scrubworx can revolutionize</Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: `${mainThemeColor}` }}>your workflow</Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, color: `${mainThemeColor}`, mt:1}}>Scrubworx is your one-stop solution, taking care of everything from uploading documents to extracting and compiling data</Typography>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={6}>
            <CardStylish heading="Application Upload" content="Our advanced OCR technology converts documents into machine-readable text" icon={<CloudUploadOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
          </Grid>

          <Grid item xs={6} >
            <CardStylish heading="Text Extraction" content="Our advanced OCR technology converts documents into machine-readable text" icon={<TextFieldsIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
          </Grid>

          <Grid item xs={6} mt={3}>
            <CardStylish heading="Name & Address Parsing" content="Utilize NLP latest entity techniques to extract and standardize applicant information" icon={<PersonOutlineOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
          </Grid>

          <Grid item xs={6} mt={3}>
            <CardStylish heading="Pertinent information Integration" content="Seamlessly retrieve and update applicant phone numbers with our extensive informational  integration" icon={<DataSaverOnOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
          </Grid>

          <Grid item xs={6} mt={3}>
            <CardStylish heading="Excel Compilation" content="Compile all applicants' information into a user-friendly Excel spreadsheet" icon={<SimCardDownloadOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
          </Grid>

          <Grid item xs={6} mt={3}>
            <CardStylish heading="Batch Processing" content="Handle multiple applications efficiently with our automated batch processing" icon={<AccountTreeOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
          </Grid>

        </Grid>

      
      </Box>

      <Box sx={{ 
        height: 'auto',
        background: '#0c0c0c',
        borderTop: '1px solid #0a0a0a',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
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