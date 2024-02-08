import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  //to store the search? #
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  async function getData() {
    const url = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=REGION%5E1036&search_radius=0.0&term=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
        'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResult(result);

      console.log(result);

      // render result.data array! on change event for user search
    } catch (error) {
      console.error(error);
    }
  }
  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to prevent default form submission and call getData
  const handleSearch = (event) => {
    event.preventDefault();
    getData();
  };

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
