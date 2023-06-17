import React, { useState, useCallback, useEffect } from "react";

import PropTypes from 'prop-types';

import {
    Alert,
    Stack,
    Button,
    Snackbar,
    MenuItem,
    Select
} from '@mui/material';

import { SelectLabel } from "../styled";

const Notification = ({ notificationResult, categories, onCancel, onSave }) => {
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');

    const [open, setOpen] = useState(false);
    const [dialogSeverety, setDialogSeverety] = useState('success');
    const [dialogMessage, setDialogMessage] = useState('');

    useEffect(() => {
        if (!notificationResult) {
            return;
        }

        const { success, error } = notificationResult;

        if (error) {
            setDialogMessage(error);
            setDialogSeverety('error');
            setOpen(true);
        }

        if (success) {
            setDialogMessage('Your message has just been sent successfully!');
            setDialogSeverety('success');
            setOpen(true);
        }

    }, [notificationResult])

    const handleSave = useCallback(() => {
        if (!message || !category) {
            setDialogMessage('You must enter the message, and a category please!');
            setDialogSeverety('error');
            setOpen(true);
            
            return;
        }

        const notificationData = {
            message,
            subscribed: category,
        };
        onSave(notificationData);

        setMessage('');
        setCategory('');
    }, [onSave, message, category]);

    const handleCancel = useCallback(() => {
        onCancel();
    }, [onCancel]);

    const handleClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }, [])

    const handleCategoryChange = useCallback(event => {
        setCategory(event.target.value);
    }, []);

    return (
        <Stack
            direction="column"
            spacing={{ xs: 2, sm: 10, md: 4 }}
            sx={{ margin: '20px 60px' }}
        >
            <Alert severity="info">Hey! Preparing a new Message. Go!</Alert>
            <textarea rows="10"
                value={message}
                placeholder='Enter your comments or details here!'
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

Notification.propTypes = {
    notificationResult: PropTypes.object,
    categories: PropTypes.array,
    onCancel: PropTypes.func,
    onSave: PropTypes.func,
}

export default Notification;
