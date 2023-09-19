import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Grid, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



const htmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700;900&family=Raleway&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oxygen&family=Raleway&display=swap" rel="stylesheet">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
  

const CdnCarousel = () => {

  const displaytext = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'

  const [copyStatus, setCopyStatus] = React.useState("Copy");

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            setCopyStatus("Copied!");
            setTimeout(() => {
                setCopyStatus("Copy")
            }, 3000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
  }

  return (
    <>

        <Box sx={{
            height: 'auto',
            px: 1,
            mb : 2,
            mt: 2.5
        }}>
            <Typography variant='body1'sx={{ position: 'relative', color: '#fff', zIndex: 2, fontSize: 15, fontFamily: 'Oxygen' }}>
                See below example to how to paste integrate it in your website.
            </Typography>
        </Box>

        <Box sx={{
            position: 'relative',
            mt: 2,
            border: '1px solid #585724',
            background: '#080804',
            borderRadius: '10px',
            height: '200px',
            py: 1,
            px: 5,
            overflow: 'scroll'
        }}>
            <Tooltip title={copyStatus} sx={{ position: 'absolute', top: 10, right: 22, zIndex: 2 }}>
                <IconButton onClick={() => handleCopyClick(htmlCode)}>
                    <ContentCopyIcon sx={{ color: '#5e5c5c', '&:hover': { color: '#fff' } }} />
                </IconButton>
            </Tooltip>

            <Grid container spacing={1} justifyContent="flex-start">
                <Grid item xs={12}>
                    <pre style={{ color: '#fff', margin: 0, fontFamily: 'monospace' }}>
                        {htmlCode}
                    </pre>
                </Grid>
            </Grid>

        </Box>

    </>
  );
}

export default CdnCarousel