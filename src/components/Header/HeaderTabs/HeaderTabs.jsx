import * as React from 'react';

import TabList from '@mui/lab/TabList';
import HeaderLinkTab from '../HeaderLinkTab';

const HeaderTabs = () => {
  return (
    <TabList>
      <HeaderLinkTab label="Home" value="1" href="/" />
      <HeaderLinkTab label="Notifications" value="2" href="/notifications" />
      <HeaderLinkTab label="About" value="3" href="/about" />
    </TabList>
  );
};

export default HeaderTabs;
