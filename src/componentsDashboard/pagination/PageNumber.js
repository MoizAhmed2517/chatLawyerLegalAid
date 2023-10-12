import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
  } from '@mui/material/styles';

const violetBase = '#ffd300';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#fff',
    },
  },
  
});

const PageNumber = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2}>
                <Pagination
                // count={props.totalPostCount}
                count={10}
                variant="outlined"
                color='violet'
                shape="circle"
                size="large"
                // onChange={props.handleCurrentPage}
                sx={{
                    '.MuiPaginationItem-root':{
                        color: '#fff',
                        borderColor: '#fff'
                    },

                    '& .MuiPaginationItem-root .Mui-selected': {
                        color: `${violetBase}`,
                        borderColor: `${alpha(violetBase, 0.9)}`
                    }

                }}
                />
            </Stack>
        </ThemeProvider>
      )
}

export default PageNumber