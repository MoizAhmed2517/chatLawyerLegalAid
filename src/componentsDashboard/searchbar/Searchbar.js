import React from 'react';

// MUI Icons


// MUI components
import { Box, Paper, Container, Grid, FormControl, InputLabel, Select } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "5px",
    backgroundColor: '#303025',
    border: '1px solid #585724',
    color: '#fff',
    '&:hover': {
      boxShadow: '0px 1px 6px 0px rgba(179, 175, 29, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset',
    },
    width: '80%',
    aligntItem: 'center',
    margin: '10px auto', // Center the search bar horizontally
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    zIndex: 1,
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     backgroundColor: '#303025',
     borderRadius: '10px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
      
    },
  }));

const Searchbar = () => {
    const [search, setSearch] = React.useState("");

    const handleSearch = (e) => {
        const filtername = e.target.value.toLowerCase();
    }

  return (
    <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#fff' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder='Search...'
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
                fullWidth
            />
            </Search>
        </Grid>
    </Grid>
  )
}

export default Searchbar