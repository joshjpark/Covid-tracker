import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchedCountries = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchedCountries();
    },[setFetchedCountries]);
    
    // destructure object to array of countries
    // const { countries } = fetchedCountries;
    // console.log(fetchedCountries);
    // console.log('hello!!!');
    // console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {/* {fetchedCountries.countries.map((country, i) => <option key={i} value={country}>{country}</option>)} */}
                {/* {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                // {countries.map((country, i) => <option key={i} value={country}>{country}</option>)} */}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;