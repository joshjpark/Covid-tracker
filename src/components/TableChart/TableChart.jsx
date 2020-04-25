import React, { useState, useEffect } from 'react';
import styles from './TableChart.module.css'
import { filterIndex } from '../BarChart/BarChart'
import { fetchTimeLapse } from '../../api';
import * as ReactBootstrap from 'react-bootstrap';

const TableChart = ({ country }) => {
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

    const renderData = ({ date, confirmed, recovered, deaths }, index) => {
        return (
            <tr key={index}>
                <td>{date}</td>
                <td>{confirmed}</td>
                <td>{recovered}</td>
                <td>{deaths}</td>
            </tr>
        );
    }
    // now render as HTML! 
    // return (
    //     <div className={styles.container}>
    //         {/* {CreateTable('hello', country)} */}
    //         {CreateTables(dailyData)}
    //     </div>        
    // );
    return (
        <div className={styles.container}>
            <ReactBootstrap.Table striped border hover>
        <thead>
            <tr>
                <th>Date</th>
                <th>Infected</th>
                <th>Recovered</th>
                <th>Deaths</th>
            </tr>
        </thead>            
        <tbody>
            {dailyData.slice(0).reverse().map(renderData)}
        
        </tbody>
            </ReactBootstrap.Table>
        </div>
    );
}



// create table from data
// function CreateTables(data) {
//     if (data) {
//         let table = "<table><thead><tr><th>Date</th><th>Infected</th><th>Recovered</th><th>Deaths</th></tr>";
//         data.forEach(function(item, index) {
//             table += "<tr><td>" + item['date'] + "</td><td>" + item['confirmed'] + "</td><td>" + item['recovered'] + "</td><td>" + item['deaths'] + "</td></tr>";        
//         });
//         table += "</thread></table>";
//         return table;
//     }
// }

export default TableChart;