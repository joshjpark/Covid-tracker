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
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)', 
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)', 
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'                            
                        ], 
                        borderColor: [
                            'rgba(255, 99, 132, 1)', 
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)', 
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        fill: true,
                    }, {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: 'Recovered',
                        backgroundColor: [
                            'rgba(99, 255, 132, 0.2)',
                            'rgba(162, 54, 235, 0.2)',
                            'rgba(206, 255, 86, 0.2)',
                            'rgba(192, 75, 192, 0.2)',
                            'rgba(102, 153, 255, 0.2)',
                            'rgba(159, 255, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(99, 255, 132, 0.8)',
                            'rgba(162, 54, 235, 0.8)',
                            'rgba(206, 255, 86, 0.8)',
                            'rgba(192, 75, 192, 0.8)',
                            'rgba(102, 153, 255, 0.8)',
                            'rgba(159, 255, 64, 0.8)',
                        ],
                        pointBackgroundColor: [
                            'rgba(99, 255, 132, 1)'
                        ],
                        fill: true,
                    }, {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        backgroundColor: [
                            'rgba(99, 132, 255, 0.2)',
                            'rgba(162, 235, 54, 0.2)',
                            'rgba(206, 86, 255, 0.2)',
                            'rgba(192, 192, 75, 0.2)',
                            'rgba(102, 255, 153, 0.2)',
                            'rgba(159, 64, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(99, 132, 255, 1)',
                            'rgba(162, 235, 54, 1)',
                            'rgba(206, 86, 255, 1)',
                            'rgba(192, 192, 75, 1)',
                            'rgba(102, 255, 153, 1)',
                            'rgba(159, 64, 255, 1)'
                        ],
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

