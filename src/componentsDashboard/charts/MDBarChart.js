import React, {useEffect, useState} from 'react';

// Ant Charts
import { Column } from '@ant-design/plots';

// Material UI Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI components
import { Box, Stack, Tooltip, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import data from './words';

const MDBarChart = (props) => {
  
  const config = {
    data,
    xField: 'text',
    yField: 'weight',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    columnStyle: {
      radius: [2, 2, 0, 0],
    },
    scrollbar: {
      type: 'horizontal',
    },
    color: '#fffb62',
  };
  
  const chartStyle = { height: 225 };
  
  return (
    <Card sx={{ background: '#30302582', marginLeft: 1, marginBottom: 2, border: '1px solid #585724', borderRadius: '0.75rem', boxShadow: 'none' }}>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography variant='h6' sx={{ color: '#fffb62'}} >{props.descr}</Typography>
          <Tooltip title={props.descr}>
            <InfoOutlinedIcon sx={{ color: '#fffb62', mt: "4px !important"}} />
          </Tooltip>
        </Stack>
      </CardContent>

      <Divider sx={{ margin: "0px 15px 0px 15px", background: '#585724' }}/>

      <CardContent>
          <div style={chartStyle}>
            <Column {...config} />
          </div>
      </CardContent>
    </Card>
  )
}

export default MDBarChart