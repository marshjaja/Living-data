
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//  function defines our search bar component
function SearchBar() {
    //  'useState' that helps us remember what the user types in the search box
    const [location, setLocation] = useState(''); // start with an empty search

    //  called when the user clicks the search button
    async function getData() {
        //  create url
        const url = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${location}`;

        const options = {
            method: 'GET', 
            headers: {
                'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
                'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            // api sends us back response
            const result = await response.json();
            console.log(result);

            // extract locationIdentifier
            const locationIdentifiers = result.data.map(item => item.locationIdentifier);
            console.log(locationIdentifiers);

            // pick the first 
            if (locationIdentifiers.length > 0) {
                fetchData(locationIdentifiers[0]);
            }
        } catch (error) {
            // if something goes wrong, we show an error message
            console.error(error);
        }
    }

    // use the locationIdentifier to get data from property-to-rent api end point
    async function fetchData(locationIdentifier) {
        // create url using locationIdentifier
        const url = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${locationIdentifier}&search_radius=0.0`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
                'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

            // extract price amount
            const priceAmount = result.data[0].price.amount;
            console.log(priceAmount);
        } catch (error) {
            console.error(error);
        }
    }

    // function helps us remember what the user types 
    const handleInputChange = (event) => {
        // save what the user types 
        setLocation(event.target.value);
    }

    return (
        <div className='d-flex flex-col'>
            {/*  types the name of the location  */}
            <Form.Control 
                size="lg" 
                type="text" 
                placeholder="Search by Region name" 
                value={location} // shows what the user has typed 
                onChange={handleInputChange} //  helps  remember what  user types
            />
            {/*  start searching for location  */}
            <Button variant="secondary" onClick={getData}>Search</Button>
        </div>
    );
}

export default SearchBar;



