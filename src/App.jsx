// import React, { useState } from 'react';
// import PropertyCard from './components/charts/PropertyCard'; // Importing PropertyCard component
// import SearchBar from './components/SearchBar'; // Importing SearchBar component

// function App() {
//     // State variable to hold property data
//     const [propertyData, setPropertyData] = useState([]);

//     // Define a function to update property data
//     const updatePropertyData = (newData) => {
//         setPropertyData(newData); // Set property data to the new data received
//     };

//     return (
//         <div>
//             <h1>Property Listings</h1>
//             {/* Render the SearchBar component and pass updatePropertyData as a prop */}
//             <SearchBar updatePropertyData={updatePropertyData} />
//             {/* Render property data */}
//             {propertyData.map(property => (
//                 <div key={property.id}>
//                     <p>Price: {property.price.amount} GBP</p> {/* Display property price */}
//                     <p>Address: {property.displayAddress}</p> {/* Display property address */}
//                     {/* Check if propertyImages exist before mapping */}
//                     {property.propertyImages && property.propertyImages.map((image, index) => (
//                         <img key={index} src={image.srcUrl} alt={`Property Image ${index + 1}`} /> // Display property images
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default App;

//-----------------
import React, { useState } from "react";
import PropertyCard from "./components/charts/PropertyCard"; // Importing PropertyCard component
import SearchBar from "./components/SearchBar"; // Importing SearchBar component
import Crime from "./components/Crime";

function App() {
	// State variable to hold property data
	const [propertyData, setPropertyData] = useState([]);

	// Define a function to update property data
	const updatePropertyData = (newData) => {
		setPropertyData(newData); // Set property data to the new data received
	};

	return (
		<div>
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
			<Crime />
		</div>
	);
}

export default App;
