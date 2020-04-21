import React, { useState, useEffect } from 'react';
import styles from './TableChart.module.css'

const TableChart = ({ country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            if (country) {
                
            }
        }
    });

    return (
        null
    )
}

export default TableChart;