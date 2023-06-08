import React, { useEffect, useContext } from 'react'
import AppContext from '../../AppContext';

import Landing from '../../components/Landing';

import { TABS } from '../../common/constants';

// eslint-disable-next-line no-empty-pattern
const HomePage = ({ }) => {
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.HOME);
    }, [appContextValue])

    return <Landing />
}

export default HomePage;
