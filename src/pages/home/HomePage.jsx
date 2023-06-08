import React, { useEffect, useContext } from 'react'
import AppContext from '../../AppContext';

import Landing from '../../components/Landing';

import { TABS } from '../../common/constants';

const HomePage = ({ }) => {
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.HOME);
    }, [])

    return <Landing />
}

export default HomePage;
