import React from 'react';

// Ant Charts
import { Pie } from '@ant-design/plots';

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

const MDPieChart = (props) => {
    const colorMapping = {
      'Successful': '#00FF00',  // Green
      'Not Successful': '#FF0000', // Red
      'No Result': '#0000FF'  // Blue
    };

    const data = [
        {
          type: 'Successful',
          value: 27,
        },
        {
          type: 'Not Successful',
          value: 25,
        },
        {
          type: 'No Result',
          value: 18,
        }
      ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.7,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
        style: {
          fill: '#FFFFFF',
          fontSize: 12,
        },
      },
      interactions: [
        {
          type: 'pie-legend-active',
        },
        {
          type: 'element-active',
        },
      ],
      legend: {
        position: 'top',
        itemName: {
          style: {
              fill: '#FFFFFF',  // Set the font color of legend items to white
          },
        },
      },
      color: ['#fffb62', '#ffd300', '#FFC72C'],
    };

      const chartStyle = { height: 225 };
  return (
    <Card sx={{ background: '#30302582', marginLeft: 1, marginBottom: 2, border: '1px solid #585724', borderRadius: '0.75rem', boxShadow: 'none'}} >
      
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography variant='h6' sx={{ color: '#fffb62'}} >{props.descr}</Typography>
          <Tooltip title={props.descr}>
            <InfoOutlinedIcon sx={{ color: '#fffb62', mt: "4px !important"}} />
          </Tooltip>
        </Stack>
      </CardContent>

      <Divider sx={{ margin: "0px 15px 0px 15px", background: '#585724' }}/>
      

      <CardContent >
        <div style={chartStyle}>
          <Pie {...config} sx={{ marginTop: 20}} />
        </div>
          
      </CardContent>

    </Card>
  )
}

export default MDPieChart