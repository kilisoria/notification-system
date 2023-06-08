import Axios from "axios";

const getCategories = async () => {
    const response = await Axios({
        url:  `${process.env.REACT_APP_API_URL}/notification-categories/findAll`
    });
    
    return await response.data;
}

export {
    getCategories,
}