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
                    labels: dailyData.map(({ date }) => date).filter((word, index, arr) => {
                        if (index % 7 == (arr.length - 1) % 7) {
                            return word;
                        }
                    }),
                    datasets: [
                    {
                        data: dailyData.map(({ deaths }) => deaths).filter((word, index, arr) => {
                            if (index % 7 == (arr.length - 1) % 7) {
                                return word;
                            }
                        }), 
                        label: 'Deaths', 
                        backgroundColor: 'red', 
                        borderColor: 'red',
                        fill: true,
                    }, {
                        data: dailyData.map(({ recovered }) => recovered).filter((word, index, arr) => {
                            if (index % 7 == (arr.length - 1) % 7) {
                                return word;
                            }
                        }),
                        backgroundColor: 'green',
                        borderColor: 'green',
                        fill: true,
                    }, {
                        data: dailyData.map(({ confirmed }) => confirmed).filter((word, index, arr) => {
                            if (index % 7 == (arr.length - 1) % 7) {
                                return word;
                            }
                        }),
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

// filter index for weekly data
function filterIndex(index, len, word) {
    if (index % 7 == len % 7) {
        return word;
    }
}


export default BarChart;