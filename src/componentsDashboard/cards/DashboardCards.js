import React from 'react';

// Material UI Icons
import PollIcon from '@mui/icons-material/Poll';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

// Material UI components
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

const DashboardCards = (props) => {
  return (
    <Card sx={{ background: '#080804', marginLeft: 1, marginBottom: 2, border: '1px solid #585724', borderRadius: '0.75rem', boxShadow: 'none' }}>
      <CardContent >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box pt={1} px={1} py={1}>
            <Icon sx={{ color: '#fffb62', width: '60px', height: '60px', marginTop: '-17px' }}>{props.icon}</Icon>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>

          <Stack spacing={-1}>
            <Box >
                <Typography variant="caption" display="block" gutterBottom sx={{ color: '#fff', textAlign: 'right', marginRight: '20px' }}>{props.message}</Typography>
            </Box>
            <Box >
                <Typography variant="h6" display="block" gutterBottom sx={{ color: '#fff', textAlign: 'right', marginRight: '20px', marginTop: '-2px' }}>{props.count}</Typography>
            </Box>
          </Stack>
        </Stack>
        <Divider sx={{ backgroundColor: '#585724' }} />
      </CardContent>

      <CardContent sx={{ marginBottom: '-10px', marginTop: '-20px' }}>
        <Stack direction="row" spacing={0.5}>
          <Icon>
            {props.arrowSign == 0 ? 
              <CallReceivedIcon sx={{ fontSize: 15, marginBottom: '8px', color: `${props.arrowSign == 0 ? '#fb2626' : '#91e909'}`, marginLeft: 0.9 }} /> 
              : 
              <CallMadeIcon sx={{ fontSize: 15, marginBottom: '8px', color: `${props.arrowSign == 0 ? '#fb2626' : '#91e909'}`, marginLeft: 0.9 }} />}
          </Icon>
          <Typography variant="body2" sx={{ fontFamily: 'sans-serif', color: `${props.arrowSign == 0 ? '#fb2626' : '#91e909'}`  }}>{`${props.percentage}%`}</Typography>
          <Typography variant="body2" sx={{ fontFamily: 'sans-serif', color: '#fff' }} >{props.tag}</Typography>
        </Stack>
      </CardContent>
      
    </Card>
  );
}

export default DashboardCards