import React, { useState } from 'react';
import PropertyCard from './components/charts/PropertyCard'; // Importing PropertyCard component
import SearchBar from './components/SearchBar'; // Importing SearchBar component
import ContactForm from './components/ContactForm';

function App() {
  // State variable to hold property data
  const [propertyData, setPropertyData] = useState([]);

  // Define a function to update property data
  const updatePropertyData = (newData) => {
    setPropertyData(newData); // Set property data to the new data received
  };

  return (
    <div>
      <ContactForm />
      <h1>Property Listings</h1>
      {/* Render the SearchBar component and pass updatePropertyData as a prop */}
      <SearchBar updatePropertyData={updatePropertyData} />
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
