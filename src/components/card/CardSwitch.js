import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    // For the thumb of the switch in both checked and unchecked states
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fffb62',
    },
    
    // For the hover effect on the thumb
    '& .MuiSwitch-switchBase:hover': {
      backgroundColor: alpha('#fffb62', theme.palette.action.hoverOpacity),
    },
    
    // For the track of the switch in both checked and unchecked states
    '& .MuiSwitch-track': {
      backgroundColor: alpha('#fffb62', 0.5), // Assuming you want it slightly transparent for unchecked state
    },
    
    // For the track when checked
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#fffb62',
    },
  }));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const CardSwitch = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Typography sx={{ color: '#fff', mt: '6px !important', position: 'relative', zIndex: 2 }}>Monthly</Typography>
        <CustomSwitch {...label} size="large" sx={{ position: 'relative', zIndex: 2 }} />
        <Typography sx={{ color: '#fff', mt: '6px !important', position: 'relative', zIndex: 2 }}>Yearly</Typography>
    </Stack>
    
  )
}

export default CardSwitch