import React, { useContext, useEffect } from 'react'

import useNotifications from '../../hooks/useNotifications';

import AppContext from '../../AppContext';

import Notifications from '../../components/Notifications';

import { TABS } from '../../common/constants';

// eslint-disable-next-line no-empty-pattern
const NotificationsPage = ({ }) => {
    const appContextValue = useContext(AppContext);
    const { notifications } = useNotifications();

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.NOTIFICATIONS);
    }, [appContextValue])

    if (!notifications || notifications.length === 0) {
        return null;
    }

    return <Notifications notifications={notifications} />;
};

export default NotificationsPage;
