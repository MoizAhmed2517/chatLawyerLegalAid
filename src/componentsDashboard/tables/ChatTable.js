import * as React from 'react';

// Material UI Icons
import FeedbackIcon from '@mui/icons-material/Feedback';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// Material UI component
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Tooltip } from '@mui/material';
import Feedbackdialog from '../dialog/Feedbackdialog';

const columns = [
  { id: 'chatId', label: "Chat ID", minWidth: 20 },
  { id: 'name', label: 'Client Name', minWidth: 10 },
  { id: 'time', label: 'Conversation Time', minWidth: 10 },
  { id: 'status', label: 'Booking status', minWidth: 10, align: 'left' },
  { id: 'interaction', label: 'User interaction (%)', minWidth: 10, align: 'left'},
];

const del = {
    id: 'del',
    label: 'Feedback',
    minWidth: 17,
    align: 'center',
}

// const edit = {
//     id: 'edit',
//     label: 'Edit',
//     minWidth: 17,
//     align: 'center',
// }


function createData(chatId, name, time, status, interaction, FeedbackStatus ) {
  return { chatId, name, time, status, interaction, FeedbackStatus };
}

const rows = [
    createData( 'A-23', 'Jackson Alma', '15 mins', 'Consultation Booked', '85%', 1 ),
    createData( 'A-24', 'China Rong', '1hr 10 min', 'Incomplete session', '70%', 0 ),
    createData( 'A-25', 'Marco Polo', '45 mins', 'Consultation Booked', '50%', 1 ),
    createData( 'A-26', 'Johnny Apple', '30 mins', 'Incomplete session', '95%', 0 ),
    createData( 'A-27', 'Linda Bloom', '20 mins', 'Consultation Booked', '60%', 1 ),
    createData( 'A-28', 'Sam Roger', '1hr 5 min', 'Incomplete session', '80%', 0 ),
    createData( 'A-29', 'Helen Mars', '10 mins', 'Consultation Booked', '65%', 1 ),
    createData( 'A-30', 'Ivan Pete', '55 mins', 'Incomplete session', '90%', 0 ),
    createData( 'A-31', 'Oscar Mike', '40 mins', 'Consultation Booked', '75%', 1 ),
    createData( 'A-32', 'Anna Gate', '1hr 20 min', 'Incomplete session', '88%', 0 ),
    createData( 'A-33', 'Victor Echo', '5 mins', 'Consultation Booked', '78%', 1 ),
    createData( 'A-34', 'Mike Delta', '2hr 15 min', 'Incomplete session', '82%', 1 ),
    createData( 'A-35', 'Juliet Alpha', '35 mins', 'Consultation Booked', '67%', 1 ),
    createData( 'A-36', 'Charlie Tango', '50 mins', 'Incomplete session', '72%', 1 ),
    createData( 'A-37', 'Bravo Zulu', '25 mins', 'Consultation Booked', '89%', 0 ),
];

const ChatTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleFeedback = () => {
        setOpen(true)
    };
  
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', background: '#30302582', borderRadius: 2.5, border: '1px solid #585724' }}>
            <TableContainer sx={{ maxHeight: 360 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableCell
                            key={index}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            sx={{ background: '#303025', fontSize: '15px', color: '#fff', borderBottom: '3px solid #585724' }}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                    {/* <TableCell key={edit.id} align={edit.align} style={{ minWidth: edit.minWidth }} sx={{ borderBottom: "none", background: '#303025', fontSize: '15px', color: '#fff' }}>
                        {edit.label}
                    </TableCell> */}
                    <TableCell key={del.id} align={del.align} style={{ minWidth: del.minWidth }} sx={{ background: '#303025', fontSize: '15px', color: '#fff', borderBottom: '3px solid #585724' }}>
                        {del.label}
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align} sx={{ color: '#fff', borderBottom: '2px solid #585724' }}>
                                    {value}
                                </TableCell>
                                );
                            })}
                            {/* <TableCell key={edit.id} align={edit.align} sx={{ color: '#fff' }}>
                                <IconButton><EditOutlinedIcon /></IconButton>
                            </TableCell> */}
                            <TableCell key={del.id} align={del.align} sx={{ color: '#fff', borderBottom: '2px solid #585724' }}>
                                {row.FeedbackStatus === 1 ? (
                                    <IconButton onClick={handleFeedback}><FeedbackIcon sx={{ color: '#585724' }}/></IconButton>
                                ) : (
                                    <Tooltip title="No Feedback provided"><IconButton onClick={handleFeedback} disabled><FeedbackIcon sx={{ color: '#bcbcbc' }}/></IconButton></Tooltip>
                                )
                                }   
                            </TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>
            </Table>
            </TableContainer>

            <Feedbackdialog open={open} setOpen={setOpen} />

            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ color: '#fff' }}
            />
        </Paper>
    );
}

export default ChatTable