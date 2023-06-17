"use client";

import React, { useEffect, useContext, useState } from 'react'

import { useNavigate } from "react-router-dom";
import useCategories from '../../../hooks/useCategories';

import { addNotification } from '../../../actions/notifications';

import AppContext from '../../../AppContext';

import Notification from '../../../components/Notifications/Notification';

import { TABS } from '../../../common/constants';

// eslint-disable-next-line no-empty-pattern
const NotificationPage = ({ }) => {
    const appContextValue = useContext(AppContext);
    const navigate = useNavigate();

    const [notificationResult, setNotificationResult] = useState({});
    const { categories } = useCategories();

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.NOTIFICATIONS);
    }, [appContextValue])

    const handleSave = async notification => {
        const { success, error } = await addNotification(notification);
        
        const notificationResultData = {
            success,
            error
        };

        setNotificationResult(notificationResultData);
    }

    return (
        <Notification
            notificationResult={notificationResult}
            onSave={handleSave}
            onCancel={() => navigate('/notifications')}
            categories={categories} />
    )
};

export default NotificationPage;
