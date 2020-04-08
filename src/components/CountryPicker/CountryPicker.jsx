import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    let countries;

    useEffect(() => {
        const fetchedCountries = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchedCountries();
    },[setFetchedCountries]);
    
    // destructure country list
    if (fetchedCountries.countries) {
        countries = (fetchedCountries.countries.map((country, i) => country.name));
    }

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries && countries.map((country, i) => <option key={i} value={country}>{country}</option>)}                
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;