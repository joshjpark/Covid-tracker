import React, { useState, useEffect } from 'react';
import { fetchTimeLapse } from '../../api';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.css';

// reference: https://codepen.io/orouz/pen/NZqLRY

const BarChart = ({ country, countryTimeLapse }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        if (country) {
            let dailyData = countryTimeLapse;
            setDailyData(dailyData);
        }
    });

    const barChart = (
        dailyData.length
            ? (
                <Bar
                data={{
                    labels: filterIndex(dailyData.map(({ date }) => date)),

                    datasets: [
                    {
                        data : filterIndex(dailyData.map(({ deaths }) => deaths)),
                        label: 'Deaths', 
                        borderColor: 'red',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)', 
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)', 
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 159, 64, 0.8)'                            
                        ], 
                        borderWidth: 2,
                        fill: true,
                    }, 
                    {
                        data: filterIndex(dailyData.map(({ recovered }) => recovered)),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: [
                            'rgba(99, 255, 132, 0.8)',
                            'rgba(162, 54, 235, 0.8)',
                            'rgba(206, 255, 86, 0.8)',
                            'rgba(192, 75, 192, 0.8)',
                            'rgba(102, 153, 255, 0.8)',
                            'rgba(159, 255, 64, 0.8)',
                        ],
                        borderWidth: 2,
                        fill: true,
                    }, 
                    {
                        data: filterIndex(dailyData.map(({ confirmed }) => confirmed)),
                        label: 'Infected',
                        borderColor: '#2196f3',
                        backgroundColor: [
                            'rgba(99, 132, 255, 0.8)',
                            'rgba(162, 235, 255, 0.8)',
                            'rgba(206, 86, 255, 0.8)',
                            'rgba(192, 192, 255, 0.8)',
                            'rgba(102, 255, 153, 0.8)',
                            'rgba(159, 64, 255, 0.8)'
                        ],
                        borderWidth: 2,
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
            {barChart}
        </div>
    )
}


// filters array index
export function filterIndex(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 7 === (arr.length - 1) % 7) {
            ret.push(arr[i]);
        }
    }
    return ret;
} 

export default BarChart;