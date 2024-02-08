import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {

    //to store the search?
    const [searchTerm, setSearchTerm] = useState('');

    //Create a new state that will hold the value after the handleSearch value (holds info on the city the user inputted)
    const [userSearchInput, setUserSearchInput] = useState('');
    //need to call the endpoint- the api that will change the user input to the region code, then need to pass this region code to another api call 
    //


    // useEffect hook to call the api endpoint
    useEffect(() => {
        async function getData() {
            const url = 'https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=London';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
                    'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }

            // render result.data array! on change event for user search
       
    } 
        getData()

    }, [userSearchInput])


// Function to handle input change
const handleInputChange = (e) => {
    setSearchTerm(() => e.target.value);
    // console.log(e.target.value)
    // console.log(searchTerm)
};

// Function to prevent default form submission (prevent the entire page from reloading) and getData to fetch from the api
const handleSearch = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    setUserSearchInput(e.target[0].value)

    // console.log(e)
    // getData();
};

return (
    <>
        <div className='d-flex flex-col'>
            <Form onSubmit={handleSearch}>
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Search by Region name'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <Button type='submit' variant='secondary'>
                    Search
                </Button>
            </Form>
        </div>
        <br />
    </>
);
}

export default SearchBar;


