import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function SearchBar() {
  //to store the search? #
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  function handleResponse(response) {
    searchResult({
      ready: true,
    });
  }



  const options = {
    method: 'GET',
    url: 'https://uk-real-estate-rightmove.p.rapidapi.com/property-to-rent',
    params: {
      identifier: 'REGION^1036',
      search_radius:'0.0',
    },
    headers: {
        'X-RapidAPI-Key': '3d88c66c72mshbac12c1b88b25b9p145ee0jsnc7f761aead10',
        'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com',
      },
    };

    try {
      const response = axios.request(options);
      console.log(response.data);
      
      // render result.data array! on change event for user search
    } catch (error) {
      console.error(error);
    }
    
  }
  // Function to handle input change
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  // Function to prevent default form submission and call getData
  function handleSearch(event) {
    event.preventDefault();
    getData();
  }

  return (
    <div className="d-flex flex-col">
      <Form onSubmit={handleSearch}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search by Region name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="secondary">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchBar;
