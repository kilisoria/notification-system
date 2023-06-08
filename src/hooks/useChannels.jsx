import { useEffect, useState } from 'react';

import { getChannels } from '../actions/channels';

const useChannels = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const loadChannels = async () => {
            const channelsData = await getChannels();
            setChannels(channelsData);
        }

        loadChannels();
    }, [setChannels]);


    return {
        channels,
    }
};

export default useChannels;
