import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Landing = () => {
    return (
        <div style={{ padding: '40px 0' }}>
         <Stack sx={{ width: '50%', margin: '0 auto', fontSize: '40px' }} spacing={2}>
          <Alert severity="info">
            <strong>Notification System!</strong>&nbsp; This is a challenge code — <strong>check it out!</strong>
          </Alert>
           <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem divider>
            <Button variant="text" sx={{ textTransform: 'capitalize' }} startIcon={<ContentCopyIcon sx={{ cursor: 'pointer' }} />}>
              Implementation Details
            </Button>
          </ListItem>
          <ListItem divider>
            <Button variant="text" sx={{ textTransform: 'capitalize' }} startIcon={<GitHubIcon sx={{ cursor: 'pointer' }} />}>
              BE Repository
            </Button>
          </ListItem>
          <ListItem divider>
            <Button variant="text" sx={{ textTransform: 'capitalize' }} startIcon={<GitHubIcon sx={{ cursor: 'pointer' }} />}>
              FE Repository
            </Button>
          </ListItem>
        </List>
          <Button sx={{ marginTop: 4 }} variant="contained" endIcon={<SendIcon />} onClick={() => {
            window.location.replace('notifications');
        }}>
          Enter
        </Button>
        </Stack>
        </div>
    );
};

export default Landing;
