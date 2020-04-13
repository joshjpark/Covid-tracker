import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchTimeLapse } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
 
const Charts = ({ country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            if (country) {
                let dailyData = await fetchTimeLapse();
                dailyData = dailyData.data[country];
    
                setDailyData(dailyData);
            }
        }
        fetchAPI();
    });

    // async componentDidMount() {
    //     const fetchedData = await fetchData();
    //     const fetchedTimeLapse = await fetchTimeLapse();
    //     this.setState( { data : fetchedData });

    //     // console.log(fetchedData);
    //     console.log('fetchedTimeLapse: ');
    //     console.log(fetchedTimeLapse.data['Afghanistan']);
    //     // console.log(fetchedTimeLapse.data[]);
    // }



    const lineChart = (
        dailyData.length
            ? (
                <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                    {
                        data: dailyData.map(({ deaths }) => deaths), 
                        label: 'Deaths', 
                        backgroundColor: 'red', 
                        borderColor: 'red',
                        fill: true,
                    }, {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: 'Recovered',
                        backgroundColor: 'green',
                        borderColor: 'green',
                        fill: true,
                    }, {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#2196f3',
                        backgroundColor: '#2196f3',
                        borderWidth: 1,
                        fill: true,
                    }
                ],
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    }
                }}
            />) : null
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;