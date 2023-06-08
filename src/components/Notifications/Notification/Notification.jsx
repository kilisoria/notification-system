import React, { useState, useCallback } from "react";

import {
    Alert,
    Stack,
    Button,
    Snackbar,
    MenuItem,
} from '@mui/material';

import { SelectLabel } from "../styled";

import Select from '@mui/material/Select';

const Notification = ({ onCancel, onSave, channels, categories }) => {
    const [message, setMessage] = useState('');
    const [channel, setChannel] = useState('');
    const [category, setCategory] = useState('');

    const [open, setOpen] = useState(false);
    const [dialogSeverety, setDialogSeverety] = useState('success');
    const [dialogMessage, setDialogMessage] = useState('');

    const handleSave = useCallback(() => {
        if (!message || !channel || !category) {
            setDialogMessage('You must enter the message, channel, and category please!');
            setDialogSeverety('error');
            setOpen(true);
            
            return;
        }

        const notificationData = {
            message,
            channel,
            subscribed: category,
        };
        onSave(notificationData);

        setDialogMessage('Your message has just been sent successfully!');
        setDialogSeverety('success');
        setOpen(true);

        setMessage('');
        setChannel('');
        setCategory('');
    }, [onSave, message, channel, category]);

    const handleCancel = useCallback(() => {
        onCancel();
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChannelChange = event => {
        setChannel(event.target.value);
    };

    const handleCategoryChange= event => {
        setCategory(event.target.value);
    };

    return (
        <Stack
            direction="column"
            spacing={{ xs: 2, sm: 10, md: 4 }}
            sx={{ margin: '20px 60px' }}
        >
            <Alert severity="info">Hey! Preparing a new Message. Go!</Alert>
            <textarea rows="10"
                value={message}
                placeholder='Enter your comment or question here!'
                style={{ fontSize: 16, fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <SelectLabel>Category</SelectLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="category-select"
                value={category}
                onChange={handleCategoryChange}
                placeholder="Category"
                style={{ fontSize: 16, textAlign: 'left', fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {categories && categories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                ))}
            </Select>
            <SelectLabel>Channel</SelectLabel>
            <Select
                id="channel-select"
                value={channel}
                onChange={handleChannelChange}
                placeholder="Channel"
                style={{ fontSize: 16, textAlign: 'left', fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {channels && channels.map((channel) => (
                    <MenuItem key={channel._id} value={channel._id}>{channel.name}</MenuItem>
                ))}
            </Select>
            <Stack direction="row">
                <Button variant="contained" color="primary" sx={{ width: 160 }} onClick={handleSave}>
                    Save
                </Button>&nbsp;
                <Button variant="contained" color="grey" sx={{ width: 160 }} onClick={handleCancel}>
                    Cancel
                </Button>
            </Stack>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
                <Alert onClose={handleClose} severity={dialogSeverety} sx={{ width: '100%' }}>
                    {dialogMessage}
                </Alert>
            </Snackbar>
        </Stack>
    )
};

export default Notification;
