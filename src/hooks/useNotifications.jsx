import { useEffect, useState } from 'react';

import { getNotifications } from '../actions/notifications';

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const loadNotifications = async () => {
            const notificationsData = await getNotifications();
            setNotifications(notificationsData);
        }

        loadNotifications();
    }, []);


    return {
        notifications,
    }
};

export default useNotifications;
