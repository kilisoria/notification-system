import React, { useEffect, useContext }  from 'react';
import AppContext from '../../AppContext';

import About from '../../components/About'

import { TABS } from '../../common/constants';

// eslint-disable-next-line no-empty-pattern
const AboutPage = ({ }) => {
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.ABOUT);
    }, [appContextValue])

    return <About />
};

export default AboutPage;
