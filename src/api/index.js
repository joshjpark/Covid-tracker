import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const timelapseurl = 'https://pomber.github.io/covid19/timeseries.json';

// http api call; asynchronous so it doesn't block main thread
export const fetchData = async (country) => {
    let dynamicUrl = url;
    
    if (country) {
        // dynamicUrl = await axios.get(`${url}/countries/${country}`);
        dynamicUrl = `${url}/countries/${country}`;
    }
    try {
        const response = await axios.get(dynamicUrl);
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

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${url}/countries`);
        const { data } = response;
        return data;
    } catch(error) {
    }
}

export const fetchTimeLapse = async () => {
    try {
        const response = await axios.get(`${timelapseurl}`);
        return response;
    } catch(error) {
    }
}