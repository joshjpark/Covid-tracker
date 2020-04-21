import React, { Component } from 'react';

import { Cards, Chart, CountryPicker, PieChart, BarChart } from './components';
import styles from './App.module.css';
import { fetchData, fetchTimeLapse } from './api';

class App extends Component {
    // fetch data to Cards object
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const fetchedTimeLapse = await fetchTimeLapse();
        this.setState( { data : fetchedData });
    }

    // fetch data and set state
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country : country });
    }

    render() {
        const { data, country } = this.state;

        return (
            // no css intereference across fs
        <div className={styles.container}>
            <Cards data={data}/>
                <CountryPicker country={country} handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
                <PieChart data={data} country={country}/>
                <BarChart data={data} country={country}/>
        </div>
        )
    }
}

export default App;