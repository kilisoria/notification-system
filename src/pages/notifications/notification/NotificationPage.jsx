import React, { useEffect, useContext, useState } from 'react'

import { useNavigate } from "react-router-dom";

import useNotifications from '../../../hooks/useNotifications';

import { getChannels } from '../../../actions/channels';
import { getCategories } from '../../../actions/categories';

import AppContext from '../../../AppContext';

import Notification from '../../../components/Notifications/Notification';

import { TABS } from '../../../common/constants';

// eslint-disable-next-line no-empty-pattern
const NotificationPage = ({ }) => {
    const { addNotification } = useNotifications();
    const appContextValue = useContext(AppContext);
    const navigate = useNavigate();

    const [channels, setChannels] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.NOTIFICATIONS);
    }, [appContextValue])

    useEffect(() => {
        const loadChannels = async () => {
            const channelsData = await getChannels();
            setChannels(channelsData);
        }

        loadChannels();
    }, [setChannels]);

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesData = await getCategories();
            setCategories(categoriesData);
        }

        loadCategories();
    }, [setCategories]);

    const handleSave = (post, isEdit = false) => {
        addNotification(post);
    }

    return <Notification
        onSave={handleSave}
        onCancel={() => navigate('/notifications')}
        channels={channels}
        categories={categories} />
};

export default NotificationPage;
