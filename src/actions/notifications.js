import Axios from "axios";

const getNotifications = async () => {
    const response = await Axios({
        url: 'http://localhost:3000/notifications/findAll',
        method: 'GET',
    });
    
    return await response.data;
}

const addNotification = async (notification) => {
    try {
        const response = await Axios({
            url: 'http://localhost:3000/notifications',
            method: 'POST',
            data: notification
        });

        await response.data;

        return {
            success: true,
        }
        
    } catch (error) {
        return {
            error: error?.response?.data?.message
        }
    }
}

export {
    getNotifications,
    addNotification,
}