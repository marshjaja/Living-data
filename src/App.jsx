import React, { useState } from 'react';
import PropertyCard from './components/charts/PropertyCard'; // Importing PropertyCard component
import SearchBar from './components/SearchBar'; // Importing SearchBar component
import ContactForm from './components/ContactForm';

function App() {
  // State variable to hold property data
  const [propertyData, setPropertyData] = useState([]);

  // Define a function to update property data
  const updatePropertyData = (newData) => {
    // Check if newData is an array before updating propertyData state
    if (Array.isArray(newData)) {
      setPropertyData(newData); // Set property data to the new data received
    } else {
      console.error('Property data is not an array:', newData);
    }
  };

  return (
    <div>
      <ContactForm />
      <h1>Property Listings</h1>
      {/* Render the SearchBar component and pass setPropertyData as a prop */}
      <SearchBar setPropertyData={updatePropertyData} />
      {/* Render PropertyCard for each property */}
      {propertyData.map((property) => (
        <PropertyCard
          key={property.id}
          price={property.price.amount}
          imageSrc={property.propertyImages[0].srcUrl}
        />
      ))}
    </div>
  );
}

export default App;






