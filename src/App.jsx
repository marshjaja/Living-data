
// import React, { useState } from "react";
// import PropertyCard from "./components/charts/PropertyCard"; // Importing PropertyCard component
// import SearchBar from "./components/SearchBar"; // Importing SearchBar component
// import Crime from "./components/Crime";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "./pages/Contact";

// function App() {
// 	// State variable to hold property data
// 	const [propertyData, setPropertyData] = useState([]);

// 	// Define a function to update property data
// 	const updatePropertyData = (newData) => {
// 		setPropertyData(newData); // Set property data to the new data received
// 	};

// 	return (
// 		<div>
// 			<h1>Property Listings</h1>
// 			{/* Render the SearchBar component and pass updatePropertyData as a prop */}
// 			<SearchBar updatePropertyData={updatePropertyData} />
// 			{/* Render PropertyCard for each property */}
// 			{propertyData.map((property) => (
// 				<PropertyCard
// 					key={property.id}
// 					price={property.price.amount}
// 					imageSrc={property.propertyImages[0].srcUrl}
// 				/>
// 			))}
// 			<Crime />
// 			<Contact />

// 		</div>
// 	);
// }

// export default App;


//------------------------------------------------

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Crime from './components/Crime';

function App() {
    // State variable to hold the search term
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1>Property Listings</h1>
            {/* Render the SearchBar component and pass setSearchTerm as a prop */}
            <SearchBar setSearchTerm={setSearchTerm} />
            {/* Render the Crime component and pass the searchTerm as a prop */}
            <Crime searchTerm={searchTerm} />
        </div>
    );
}

export default App;


