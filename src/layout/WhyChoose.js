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
import InsightsIcon from '@mui/icons-material/Insights';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GavelIcon from '@mui/icons-material/Gavel';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ShieldIcon from '@mui/icons-material/Shield';
import AdsClickIcon from '@mui/icons-material/AdsClick';

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
          <Typography variant="body2" sx={{ fontWeight: 400, color: `#fff`, mt:1, textAlign: 'center' }}>
          A legal chatbot is essential for lawyers as it helps understand client needs, saves time and money by streamlining tasks,
          offers multilingual support for a wider client base, and provides immediate case assessments for informed decision-making, 
          all of which significantly enhance a lawyer's practice.
          </Typography>

          <Box sx={{
                mt: 4,
            }}>

                <Grid container spacing={8}>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<InsightsIcon sx={{ height: 80, width: 80 }} />} text="Understand Your Client's Needs" descr="Gain valuable insights into your client's requirements using our user dashboard" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<GavelIcon sx={{ height: 80, width: 80 }} />} text="Save Time and Money" descr="Efficiently manage appointments, streamline document preparation, and answer client queries, ultimately saving you valuable time and resources." />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<GTranslateIcon sx={{ height: 80, width: 80 }} />} text="Multilingual Assistance" descr="ChatLegalBot offers support in multiple languages, ensuring accessibility for a diverse client base" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<AddTaskIcon sx={{ height: 80, width: 80 }} />} text="Immediate Assessment" descr="Receive real-time case assessments, allowing you to make informed decisions promptly" />
                    </Grid>
                    {/* <Grid item xs={12} md={2.4}>
                        <CardHoverIcon icon={<ConnectedTvOutlinedIcon sx={{ height: 80, width: 80 }} />} text="AI-powered" descr="This revised version emphasizes the extensive support that ChatLegalBot provides, including understanding client needs, saving time and resources, multilingual assistance, and immediate case assessments" />
                    </Grid> */}
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
                <CardStylish heading="Efficiency" content="Boost productivity and minimize manual tasks with ChatLegalBot" icon={<StackedLineChartIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} >
                <CardStylish heading="Accuracy" content="Guarantee meticulous data handling and compilation with ChatLegalBot" icon={<AdsClickIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="Security" content="Rest easy with ChatLegalBot's commitment to data security and privacy compliance" icon={<ShieldIcon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>

            <Grid item xs={6} mt={3}>
                <CardStylish heading="User-Friendly" content="Simplify management with ChatLegalBot's intuitive admin interface" icon={<Diversity3Icon sx={{ widht: 25, height: 25, color: '#fffb62' }} />} />
            </Grid>
          </Grid>

      </Box>

      <Footer mainColor={mainThemeColor} />

    </>
  )
}

export default WhyChoose