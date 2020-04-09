import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
    // fetch data to Cards object
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState( { data: fetchedData })
    }

    // fetch data and set state
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        
        return (
            // no css intereference across fs
        <div className={styles.container}>
            <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
        )
    }
}

export default App;