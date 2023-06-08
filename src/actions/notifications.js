import Axios from "axios";

const getNotifications = async () => {
    const response = await Axios({
        url: 'http://localhost:3000/notifications/findAll',
        method: 'GET',
    });
    
    return await response.data;
}

export {
    getNotifications,
}