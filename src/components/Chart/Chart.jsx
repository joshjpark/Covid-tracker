import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
 
const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData);
        }
        // console.log(dailyData);
        fetchAPI();
    });

    const lineChart = (
        dailyData.length
            ? (
                <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#2196f3',
                        backgroundColor: '#2196f3',
                        borderWidth: 1,
                        fill: false,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths), 
                        label: 'Deaths', 
                        backgroundColor: 'red', 
                        borderColor: 'red',
                        fill: true,
                    }],
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