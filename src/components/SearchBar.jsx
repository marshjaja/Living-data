import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearchInput, setUserSearchInput] = useState('');
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    async function getData() {
      // First API endpoint for auto-complete
      const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${userSearchInput}`;
      const autoCompleteOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
          'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com',
        },
      };


      try {
        const autoCompleteResponse = await fetch(autoCompleteUrl, autoCompleteOptions);
        const autoCompleteResult = await autoCompleteResponse.json();
        console.log('AutoComplete Result:', autoCompleteResult);

        // Extract the necessary information from the auto-complete result, e.g., region code
        const regionCode = autoCompleteResult?.data[0]?.identifier;

        // Second API endpoint for property-to-rent
        const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
        const propertyOptions = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
            'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com',
          },
        };

        const propertyResponse = await fetch(propertyUrl, propertyOptions);
        const propertyResult = await propertyResponse.json();
        console.log('Property Result:', propertyResult);

        // Set the property data in state
        setPropertyData(propertyResult);
      } catch (error) {
        console.error(error);
      }
    }

    if (userSearchInput) {
      getData();
    }
  }, [userSearchInput]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setUserSearchInput(searchTerm);
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
      {/* Display property data as needed */}
      {propertyData && (
        <div>
          {/* Display property data from the second API endpoint */}
          {/* Adjust the rendering based on the structure of your property data- will add bootstrap cards for specific info needed*/}
          <pre>{JSON.stringify(propertyData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default SearchBar;