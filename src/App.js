import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
    // fetch data to Cards object
    state = {
        data: {},
    }

    async componentDidMount() {
        // const { data: { confirmed, recovered, deaths, lastUpdate } } = await fetchData();
        const fetchedData = await fetchData();
        this.setState( { data: fetchedData })
    }

    render() {
        const { data } = this.state;
        
        return (
            // no css intereference across fs
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker />
            <Chart />
        </div>
        )
    }
}

export default App;