import React from 'react';

import {
  List,
  ListItem,
  Alert,
  Stack,
  Button
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';

const Landing = () => {
    return (
        <div style={{ padding: '40px 0' }}>
         <Stack sx={{ width: '50%', margin: '0 auto', fontSize: '40px' }} spacing={2}>
          <Alert severity="info">
            <strong>Notification System!</strong>&nbsp; This is a challenge code — <strong>check it out!</strong>
          </Alert>
           <List component="nav" aria-label="mailbox folders">
          <ListItem divider>
              <Button variant="text" sx={{ textTransform: 'capitalize' }} startIcon={<ContentCopyIcon sx={{ cursor: 'pointer' }} />}
               onClick={() => {
                window.open('https://drive.google.com/file/d/1Xd_UrewTxWH5kCJES7A06lKnVE8cFLc9/view?usp=drive_link', '_blank');
            }}>
              Implementation Details
              </Button>
          </ListItem>
          <ListItem divider>
              <Button variant="text" sx={{ textTransform: 'capitalize' }} startIcon={<GitHubIcon sx={{ cursor: 'pointer' }} />}
                onClick={() => {
                window.open('https://github.com/kilisoria/notification-system-be', '_blank');
            }}>
              BE Repository
            </Button>
          </ListItem>
          <ListItem divider>
              <Button variant="text" sx={{ textTransform: 'capitalize' }} startIcon={<GitHubIcon sx={{ cursor: 'pointer' }} />}
              onClick={() => {
                window.open('https://github.com/kilisoria/notification-system-fe', '_blank');
            }}>
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
