import React, { Component } from 'react';

import { Cards, Chart, CountryPicker, PieChart, BarChart, TableChart } from './components';
import styles from './App.module.css';
import { fetchData, fetchTimeLapse } from './api';

class App extends Component {
    // fetch data to Cards object
    state = {
        data: {},
        country: '',
        countryTimeLapse: []
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        // const fetchedTimeLapse = await fetchTimeLapse();
        this.setState( { data : fetchedData });
    }

    // fetch data and set state
    handleCountryChange = async (country) => {
        // summary data
        const fetchedData = await fetchData(country);
        // timelapse data
        const timeLapseData = await fetchTimeLapse();
        const countryTimeLapse = timeLapseData['data'][country];
        this.setState({ data : fetchedData, country : country, countryTimeLapse : countryTimeLapse });
    }

    render() {
        const { data, country, countryTimeLapse } = this.state;

        return (
            // no css intereference across fs
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker country={country} handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country} countryTimeLapse={countryTimeLapse}/>
            <PieChart data={data} country={country} countryTimeLapse={countryTimeLapse}/>
            <BarChart data={data} country={country} countryTimeLapse={countryTimeLapse}/>
            <TableChart data={data} country={country} countryTimeLapse={countryTimeLapse}/>
        </div>
        )
    }
}

export default App;