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

const MDBarChart = (props) => {
    const data = [
        {
          name: 'Sent',
          survey: 'Survey 1',
          kpi: 100,
        },
        {
          name: 'Sent',
          survey: 'Survey 2',
          kpi: 75,
        },
        {
          name: 'Sent',
          survey: 'Survey 3',
          kpi: 40,
        },
        {
          name: 'Sent',
          survey: 'Survey 4',
          kpi: 57,
        },
        {
          name: 'Sent',
          survey: 'Survey 5',
          kpi: 67,
        },
        {
          name: 'Sent',
          survey: 'Survey 6',
          kpi: 68,
        },
        {
          name: 'Receive',
          survey: 'Survey 1',
          kpi: 98,
        },
        {
          name: 'Receive',
          survey: 'Survey 2',
          kpi: 20,
        },
        {
          name: 'Receive',
          survey: 'Survey 3',
          kpi: 39,
        },
        {
          name: 'Receive',
          survey: 'Survey 4',
          kpi: 8,
        },
        {
          name: 'Receive',
          survey: 'Survey 5',
          kpi: 47,
        },
        {
          name: 'Receive',
          survey: 'Survey 6',
          kpi: 28,
        },
      ];
    
      const config = {
        data,
        isGroup: true,
        xField: 'survey',
        yField: 'kpi',
        seriesField: 'name',
    
        columnStyle: {
          radius: [10, 10, 0, 0],
        },
    
        legend: {
          position: 'top',
        },
        label: {
          position: 'middle',
          layout: [
            {
              type: 'interval-adjust-position',
            },
            {
              type: 'interval-hide-overlap',
            }, 
            {
              type: 'adjust-color',
            },
          ],
        },
      };
    
      const chartStyle = { height: 225 };
    
      return (
        <Card sx={{ background: '#080804', marginLeft: 1, marginBottom: 2, border: '1px solid #585724', borderRadius: '0.75rem', boxShadow: 'none' }}>
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