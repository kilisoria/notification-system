import React, { useContext, useEffect, useState } from 'react'

import { getNotifications } from '../../actions/notifications';

import AppContext from '../../AppContext';

import Notifications from '../../components/Notifications';

import { TABS } from '../../common/constants';

// eslint-disable-next-line no-empty-pattern
const NotificationsPage = ({ }) => {
    const appContextValue = useContext(AppContext);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.NOTIFICATIONS);
    }, [appContextValue])

    useEffect(() => {
        const loadNotifications = async () => {
            const notificationsData = await getNotifications();
            setNotifications(notificationsData);
        }

        loadNotifications();
    }, []);

    if (!notifications || notifications.length === 0) {
        return null;
    }

    return <Notifications notifications={notifications} />;
};

export default NotificationsPage;
