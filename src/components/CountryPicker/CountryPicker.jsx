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
    
    if (fetchedCountries.countries) {
        console.log('this should never be nuill:')
        console.log(fetchedCountries.countries);
        var countries = (fetchedCountries.countries.map((country, i) => country.name));
    }

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {countries && countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                
                {/* {fetchedCountries.countries.map((country, i) => <option key={i} value={country}>{country}</option>)} */}
                {/* {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                // {countries.map((country, i) => <option key={i} value={country}>{country}</option>)} */}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;