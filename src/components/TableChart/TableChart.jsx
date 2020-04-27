import React, { useState, useEffect } from 'react';
import styles from './TableChart.module.css'
// import { filterIndex } from '../BarChart/BarChart'
// import { fetchTimeLapse } from '../../api';
import * as ReactBootstrap from 'react-bootstrap';

const TableChart = ({ country, countryTimeLapse }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        if (country) {
            let dailyData = countryTimeLapse;
            setDailyData(dailyData);
        }
    });

    let low_confirmed = null;
    let low_recovered = null;
    let low_deaths = null;

    const renderData = ({ date, confirmed, recovered, deaths }, index, arr) => {
        let diff_confirmed = low_confirmed - confirmed;
        let diff_recovered = low_recovered - recovered;
        let diff_deaths = low_deaths - deaths;

        low_confirmed = confirmed;
        low_recovered = recovered;
        low_deaths = deaths;

        return (
            <tr key={index}>
                <td>{date}</td>
                <td>{confirmed}</td>
                <td className="p-3 mb-2 bg-warning text-black font-weight-bold">{diff_confirmed}</td>
                <td>{deaths}</td>
                <td className="p-3 mb-2 bg-danger text-white font-weight-bold">{diff_deaths}</td>
                <td>{recovered}</td>
                <td className="p-3 mb-2 bg-success text-black font-weight-bold">{diff_recovered}</td>
            </tr>
        );
    }

    return (
        <div className={styles.container}>
            <ReactBootstrap.Table striped border hover>
        <thead>
            <tr>
                <th>Date</th>
                <th>Infected</th>
                <th>New Cases</th>
                <th>Deaths</th>
                <th>New Deaths</th>
                <th>Recovered</th>
                <th>New Recovered</th>
            </tr>
        </thead>            
        <tbody>
            {dailyData.slice(0).reverse().map(renderData)}
        
        </tbody>
            </ReactBootstrap.Table>
        </div>
    );
}

export default TableChart;