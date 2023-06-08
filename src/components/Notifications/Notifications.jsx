import React, { useMemo } from 'react'

import {
    Stack,
    Tooltip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
}    from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

function createData(id, message, userName, userEmail, userPhoneNumber, channelName, subscribedName, sentAt) {
  return { id, message, userName, userEmail, userPhoneNumber, channelName, subscribedName, sentAt };
}

const Notifications = ({ notifications }) => {
    const rows = useMemo(() => {
        const formattedRows = [];

        notifications.forEach(n => {
            const { _id: id, message, user, channel, subscribed, sentAt } = n;
            const { name: userName, email: userEmail, phoneNumber: userPhoneNumber } = user;
            const { name: channelName } = channel;
            const { name: subscribedName } = subscribed;

            formattedRows.push(createData(id, message, userName, userEmail, userPhoneNumber, channelName, subscribedName, sentAt ));
        })

        return formattedRows;
    }, [notifications]);

    return (
        <TableContainer component={Paper}>
            <h3>Notifications sent!</h3>
            <Stack direction="row" sx={{ float: 'left', arginBottom: 10 }}>
                <Tooltip title="Send a new message!">
                    <a href="/notification">
                        <AddCircleIcon color="success" sx={{ width: '35px', height: '35px' }} />
                    </a>
                </Tooltip>
            </Stack>
            <Table sx={{ width: '100%', display: 'inline-table', marginTop: '30px' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ fontWeight: 'bold', backgroundColor: 'rgb(229, 246, 253)' }}>
                        <TableCell>Message</TableCell>
                        <TableCell align="center">User</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">Channel</TableCell>
                         <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Sent At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.message}
                            </TableCell>
                            <TableCell align="center">{row.userName}</TableCell>
                            <TableCell align="center">{row.userEmail}</TableCell>
                            <TableCell align="center">{row.userPhoneNumber}</TableCell>
                            <TableCell align="center">{row.channelName}</TableCell>
                            <TableCell align="center">{row.subscribedName}</TableCell>
                            <TableCell align="center">{row.sentAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Notifications;
