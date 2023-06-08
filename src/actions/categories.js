import Axios from "axios";

const getCategories = async () => {
    const response = await Axios({
        url: 'http://localhost:3000/notification-categories/findAll',
        method: 'GET',
    });
    
    return await response.data;
}

export {
    getCategories,
}