import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Paper } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const DeleteDialog = (props) => {
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [fullWidth, setFullWidth] = React.useState(true);
  
    const handleClose = () => {
      props.setOpen(false);
    };
    
    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{ style: { backgroundColor: '#303025' } }}
        >
            <DialogTitle sx={{ color: '#fff' }}>{"Client Name will be display here"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" sx={{ color: '#fff' }}>
                    Description of chat will be displayed here
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} sx={{ color: "#ffd300" }}>CANCEL</Button>
                <Button onClick={handleClose} sx={{ color: "#ffd300" }}>DELETE</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteDialog