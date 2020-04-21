import React, { useState, useEffect } from 'react';
import { fetchTimeLapse } from '../../api';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.css';

const BarChart = ({ country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            if (country) {
                let dailyData = await fetchTimeLapse();
                dailyData = dailyData.data[country];
                setDailyData(dailyData);
            }
        }
        fetchAPI();
    });

    const BarChart = (
        dailyData.length
            ? (
                <Bar
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
            {BarChart}
        </div>
    )
}

export default BarChart;