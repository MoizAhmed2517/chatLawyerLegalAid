import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import BannerChoose from '../components/banner/BannerChoose'
import CardHoverIcon from '../components/card/CardHoverIcon';
import CardStylish from '../components/card/CardStylish';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import Footer from './Footer';

// Icons
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ShapeLineOutlinedIcon from '@mui/icons-material/ShapeLineOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';

const mainThemeColor = '#fffb62';

const WhyChoose = () => {
  return (
    <>

      <Box sx={{
        height: '100vh',
      }}>
        <BannerChoose mainColor={mainThemeColor} />
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
            height: 'auto',
            background: '#0c0c0c',
            borderTop: '1px solid #0a0a0a',
            px: 17,
            pt : 8,
            pb: 10,
      }}
      >

          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}> Why Choose  <span style={{ color: `${mainThemeColor}` }}>ALLY-IN-LAW</span> ?</Typography>
          <Typography variant="body1" sx={{ fontWeight: 400, color: `#fff`, mt:1 }}>Some text description will be added by George Here</Typography>

          <Box sx={{
                mt: 4,
            }}>

                <Grid container spacing={8}>
                    <Grid item xs={12} md={2.4}>
                        <CardHoverIcon icon={<ContentPasteIcon sx={{ height: 80, width: 80 }} />} text="Generate Content" />
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                        <CardHoverIcon icon={<ShapeLineOutlinedIcon sx={{ height: 80, width: 80 }} />} text="Auto post content" />
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                        <CardHoverIcon icon={<AltRouteOutlinedIcon sx={{ height: 80, width: 80 }} />} text="Track competitor" />
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                        <CardHoverIcon icon={<ConnectedTvOutlinedIcon sx={{ height: 80, width: 80 }} />} text="Trending Topic" />
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                        <CardHoverIcon icon={<ConnectedTvOutlinedIcon sx={{ height: 80, width: 80 }} />} text="Trending Topic" />
                    </Grid>
                </Grid>

            </Box>
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

          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}> <span style={{ color: `${mainThemeColor}` }}>ChatLawyer</span> can revolutionize</Typography>
          <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>your <span style={{ color: `${mainThemeColor}` }}>legal</span> practices</Typography>
          <Typography variant="body1" sx={{ fontWeight: 400, color: `#fff`, mt:1 }}>ChatLawyer is your one-stop solution, assisting you in advising as per you client's requirement</Typography>

          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={6}>
                <CardStylish heading="Efficiency" content="Boost productivity and minimize manual tasks with ChatLegalAid" icon={<CloudUploadOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} >
                <CardStylish heading="Accuracy" content="Guarantee meticulous data handling and compilation with ChatLegalAid" icon={<TextFieldsIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="Security" content="Rest easy with ChatLegalAid's commitment to data security and privacy compliance" icon={<PersonOutlineOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="User-Friendly" content="Simplify management with ChatLegalAid's intuitive admin interface" icon={<DataSaverOnOutlinedIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>
          </Grid>

      </Box>

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

export default WhyChoose