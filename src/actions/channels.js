import Axios from "axios";

const getChannels = async () => {
    const response = await Axios({
        url: 'http://localhost:3000/channels/findAll',
        method: 'GET',
    });
    
    return await response.data;
}

export {
    getChannels,
}