"use client";

import React, { useEffect, useContext, useState } from 'react'

import { useNavigate } from "react-router-dom";

import useChannels from '../../../hooks/useChannels';
import useCategories from '../../../hooks/useCategories';

import { ErrorBoundary } from 'react-error-boundary';

import { addNotification } from '../../../actions/notifications';

import AppContext from '../../../AppContext';

import Notification from '../../../components/Notifications/Notification';

import { TABS } from '../../../common/constants';

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

// eslint-disable-next-line no-empty-pattern
const NotificationPage = ({ }) => {
    const appContextValue = useContext(AppContext);
    const navigate = useNavigate();

    const [notificationResult, setNotificationResult] = useState({});
    const { channels } = useChannels();
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
        <ErrorBoundary
            FallbackComponent={MyFallbackComponent}
            onReset={() => {
                // reset the state of your app here
            }}
            resetKeys={['']}
        >
            <Notification
                notificationResult={notificationResult}
                onSave={handleSave}
                onCancel={() => navigate('/notifications')}
                channels={channels}
                categories={categories} />
        </ErrorBoundary>
    )
};

export default NotificationPage;
