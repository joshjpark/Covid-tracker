import React, { useState, useEffect } from 'react';
import { fetchTimeLapse } from '../../api';
import { Bar, Pie } from 'react-chartjs-2';
import styles from './PieChart.module.css';

const PieChart = ({ country }) => {
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

    // most recent data for piechart
    let recentData = dailyData[dailyData.length-1];
    if (dailyData[dailyData.length-1]) {
        const { confirmed, recovered, deaths } = recentData;
    }

    const pieChart = (
        recentData
            ? ( 
                <Pie
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        fill: true,
                        backgroundColor: [
                            [
                                'rgba(99, 132, 255, 0.8)',
                                'rgba(162, 235, 54, 0.8)',
                                'rgba(206, 86, 255, 0.8)',
                                'rgba(192, 192, 75, 0.8)',
                                'rgba(102, 255, 153, 0.8)',
                                'rgba(159, 64, 255, 0.8)'
                            ],
                            [
                                'rgba(99, 255, 132, 0.8)',
                                'rgba(162, 54, 235, 0.8)',
                                'rgba(206, 255, 86, 0.8)',
                                'rgba(192, 75, 192, 0.8)',
                                'rgba(102, 153, 255, 0.8)',
                                'rgba(159, 255, 64, 0.8)',
                            ],
                            [
                                'rgba(255, 99, 132, 0.8)', 
                                'rgba(54, 162, 235, 0.8)',
                                'rgba(255, 206, 86, 0.8)', 
                                'rgba(75, 192, 192, 0.8)',
                                'rgba(153, 102, 255, 0.8)',
                                'rgba(255, 159, 64, 0.8)'                            
                            ]
                        ],
                        data: [recentData["confirmed"], recentData["recovered"], recentData["deaths"]],
                        borderColor: ['black', 'black','black'],
                        borderWidth: [1,1,1]
                    }]
                }}
            />) : null
    );
        
    return (
        <div className={styles.container}>
            {pieChart}
        </div>
    )
}

export default PieChart;