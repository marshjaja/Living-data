import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/charts/PropertyCard';

function App() {
    const [propertyData, setPropertyData] = useState([]);

    return (
        <div className="container">
            <h1 className="mt-5">Property Listings</h1>
            <SearchBar setPropertyData={setPropertyData} />
            <PropertyCard propertyData={propertyData} />
        </div>
    );
}

export default App;


