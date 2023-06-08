import React, { useContext } from 'react';

import {
  Box,
} from '@mui/material';

import TabContext from '@mui/lab/TabContext';

import AppContext from '../../AppContext';
import HeaderTabs from './HeaderTabs';

import { TABS } from '../../common/constants';

// eslint-disable-next-line no-empty-pattern
const Header = ({}) => {
  const appContextValue = useContext(AppContext);
  const { tabSelected } = appContextValue;

  if (tabSelected === TABS.HOME) {
    return null;
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', typography: 'body1', display: 'inline-block' }} style={{ width: '100%' }}>
      <div style={{ background: 'black', width: '10%', height: '50px', float: 'left' }}>
        <img width="80" height="50" src="/logila.png" alt="Gila Logo" />
      </div>
      <div style={{ float: 'left', width: '60%' }}>
        <TabContext value={tabSelected}>
          <HeaderTabs tabSelected={tabSelected} />
        </TabContext>
      </div>
    </Box>
  )
};

export default Header;
