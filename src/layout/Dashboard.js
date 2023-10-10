import React from 'react'

// MUI Icons
// Material UI Icon
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import WaterfallChartOutlinedIcon from '@mui/icons-material/WaterfallChartOutlined';

// MUI component
import { Box, Grid } from '@mui/material'
import NavbarDashboard from '../componentsDashboard/navbar/NavbarDashboard'
import DashboardCards from '../componentsDashboard/cards/DashboardCards';
import MDBarChart from '../componentsDashboard/charts/MDBarChart';
import MDPieChart from '../componentsDashboard/charts/MDPieChart';

const Dashboard = () => {
  return (
    <Box sx={{
        background: '#10100d',
        height: '120vh',
    
    }}>
        <NavbarDashboard />
        <Box sx={{ flexGrow: 0, px: 1.5, marginLeft: {xs: 7, md: 8}, marginTop: -3 }}>

          <Grid container spacing={0.5}>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCards icon={<AssessmentOutlinedIcon sx={{fontSize: '60px'}} />} message="Number of Chats" count="281" percentage="20.1" tag="Since last month" arrowSign="0"/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCards icon={<TrendingUpIcon sx={{fontSize: '60px'}} />} message="Satisfied Customer" count="52" percentage="25" tag="Since last month" arrowSign="1" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCards icon={<DataSaverOnOutlinedIcon sx={{fontSize: '60px'}} />} message="Feedbacks" count="87" percentage="2" tag="Since last month" arrowSign="0" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCards icon={<WaterfallChartOutlinedIcon sx={{fontSize: '60px'}} />} message="Avg. User interaction" count="15 mins" percentage="25" tag="Since last month" arrowSign="1" />
            </Grid>
          </Grid>

          <Grid container spacing={0.5}>
            <Grid item xs={12} sm={12} md={8}>
              <MDBarChart descr="Most Repeated Words" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MDPieChart descr="Case Resolved" />
            </Grid>
          </Grid>

        </Box>
    </Box>
  )
}

export default Dashboard