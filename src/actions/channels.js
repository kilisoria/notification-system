import Axios from "axios";

const getChannels = async () => {
    const response = await Axios({
        url: `${process.env.REACT_APP_API_URL}/channels/findAll`,
        method: 'GET',
    });
    
    return await response.data;
}

export {
    getChannels,
}