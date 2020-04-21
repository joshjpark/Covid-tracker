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
                    labels: ["Infected", "Recovered", "Died"],
                    datasets: [{
                        fill: true,
                        backgroundColor: [
                            'blue',
                            'green',
                            'red'
                        ],
                        data: [recentData["confirmed"], recentData["recovered"], recentData["deaths"]],
                        borderColor: ['black', 'black','black'],
                        borderWidth: [2,2,2]
                    }]
                }}
            />) : null
    );
    
    if (recentData) {
        console.log(recentData["confirmed"]);        
    }
    
    return (
        <div className={styles.container}>
            {pieChart}
        </div>
    )
}

export default PieChart;