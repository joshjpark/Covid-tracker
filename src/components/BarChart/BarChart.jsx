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
    
    // let a = dailyData.map(({ deaths }) => deaths);
    
    // let a = dailyData.map(({ deaths }) => deaths).filter((word, index, arr) => {
    //     if (index % 7 === (arr.length - 1) % 7) {
    //         return word;
    //     }
    // });
    
    // let a = dailyData.map(({ deaths }) => deaths).filter(function(word, index, arr) {
    //    if (index % 7 === (arr.length - 1) % 7) {
    //        return word;
    //    } 
    // });
    
        

    // let arr = []
    // let a = dailyData.map(({ date }) => date).filter((word, index, arr) => {
    //     if (index % 7 === (arr.length - 1) % 7) {
    //         arr.append(word);
    //     }
    // });
    // console.log(a);
    // console.log(arr);



    const BarChart = (
        dailyData.length
            ? (
                <Bar
                data={{
                    // labels: dailyData.map(({ date }) => date).filter((word, index, arr) => {
                    //     if (index % 7 === (arr.length - 1) % 7) {
                    //         return word;
                    //     }
                    // }),
                    labels: filterIndex(dailyData.map(({ date }) => date)),

                    datasets: [
                    {
                        // data: dailyData.map(({ deaths }) => deaths).filter((word, index, arr) => {
                        //     if (index % 7 === (arr.length - 1) % 7) {
                        //         return word;
                        //     }
                        // }), 
                        data : filterIndex(dailyData.map(({ deaths }) => deaths)),
                        label: 'Deaths', 
                        backgroundColor: 'red', 
                        borderColor: 'red',
                        fill: true,
                    }, {
                        // data: dailyData.map(({ recovered }) => recovered).filter((word, index, arr) => {
                        //     if (index % 7 === (arr.length - 1) % 7) {
                        //         return word;
                        //     }
                        // }),
                        data: filterIndex(dailyData.map(({ recovered }) => recovered)),
                        backgroundColor: 'green',
                        borderColor: 'green',
                        fill: true,
                    }, {
                        // data: dailyData.map(({ confirmed }) => confirmed).filter((word, index, arr) => {
                        //     if (index % 7 === (arr.length - 1) % 7) {
                        //         return word;
                        //     }
                        // }),
                        data: filterIndex(dailyData.map(({ confirmed }) => confirmed)),
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
// function filterIndex(index, len, word) {
//     if (index % 7 == len % 7) {
//         return word;
//     }
// }

// filters array index
function filterIndex(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 7 === (arr.length - 1) % 7) {
            ret.push(arr[i]);
        }
    }
    return ret;
} 

// var b = [];
// let a = dailyData.map(({ recovered }) => recovered);
// if (a) {
//     for (let i = 0; i < a.length; i++) {
//         if (i % 7 === (a.length - 1) % 7) {
//             b.push(a[i]);
//         }
//     }
// }
// console.log(b);



export default BarChart;