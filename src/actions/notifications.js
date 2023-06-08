import Axios from "axios";

const getNotifications = async () => {
    const response = await Axios({
        url: `${process.env.REACT_APP_API_URL}/notifications/findAll`,
        method: 'GET',
    });
    
    return await response.data;
}

const addNotification = async (notification) => {
    try {
        const response = await Axios({
            url: `${process.env.REACT_APP_API_URL}/notifications`,
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