import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

const Cdn = () => {
    const [copyStatus, setCopyStatus] = React.useState("Copy");

    
    const handleCopyClick = () => {
        navigator.clipboard.writeText("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css")
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
        <Box sx={{
            mt: 2,
            border: '1px solid #585724',
            background: '#080804',
            borderRadius: '10px',
            height: 'auto',
            py: 1,
            px: 5,
            zIndex: 2, 
            position: 'relative'
        }}>

            <Grid container spacing={1} justifyContent="flex-start">
                <Grid item xs={11}>
                    <Typography variant="subtitle1" sx={{ color: '#fff', mt: '7px !important' }}>
                        https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Tooltip title={copyStatus}>
                        <IconButton onClick={handleCopyClick} >
                            <ContentCopyIcon sx={{ color: '#5e5c5c', '&:hover': { color: '#fff' } }} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>

        </Box>
    );
}

export default Cdn;
