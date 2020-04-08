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

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`);
        const { data } = response;


        const modifiedData = data.map((dailyData) => ({
            date: dailyData.reportDate,
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total
        }));


        return modifiedData;
    } catch(error) {
        
    }
}