import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// http api call; asynchronous so it doesn't block main thread
export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } catch(error) {
    }
}

