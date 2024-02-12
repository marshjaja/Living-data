// import React, { useState } from 'react';
// import PropertyCard from './components/charts/PropertyCard'; // Importing PropertyCard component
// import SearchBar from './components/SearchBar'; // Importing SearchBar component
// import ContactForm from './components/ContactForm';

// function App() {
//   // State variable to hold property data
//   const [propertyData, setPropertyData] = useState([]);

//   // Define a function to update property data
//   const updatePropertyData = (newData) => {
//     // Check if newData is an array before updating propertyData state
//     if (Array.isArray(newData)) {
//       setPropertyData(newData); // Set property data to the new data received
//     } else {
//       console.error('Property data is not an array:', newData);
//     }
//   };

//   return (
//     <div>
//       <ContactForm />
//       <h1>Property Listings</h1>
//       {/* Render the SearchBar component and pass setPropertyData as a prop */}
//       <SearchBar setPropertyData={updatePropertyData} />
//       {/* Render PropertyCard for each property */}
//       {propertyData.map((property) => (
//         <PropertyCard
//           key={property.id}
//           price={property.price.amount}
//           imageSrc={property.propertyImages[0].srcUrl}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

//-----------------

//------------------------------------------
// import React, { useState } from 'react';
// import PropertyCard from './components/charts/PropertyCard'; // Corrected import path
// import SearchBar from './components/SearchBar'; // Corrected import path
// import ContactForm from './components/ContactForm';

// function App() {
//   const [propertyData, setPropertyData] = useState([]);

//   const updatePropertyData = (newData) => {
//     if (Array.isArray(newData)) {
//       setPropertyData(newData);
//     } else {
//       console.error('Property data is not an array:', newData);
//     }
//   };

//   return (
//     <div>
//       <ContactForm />
//       <h1>Property Listings</h1>
//       <SearchBar setPropertyData={updatePropertyData} />
//       {propertyData.map((property) => (
//         <PropertyCard
//           key={property.id}
//           propertyData={property} // Ensure propertyData is passed correctly
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

//------------------

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import About from "./components/About";
import Crime from "./components/Crime";

function App() {
	const [propertyData, setPropertyData] = useState(null);

	return (
		<div>
			<header id="header">
				<Header />
			</header>
			<ContactForm />
			<h1>Property Listings</h1>
			<SearchBar setPropertyData={setPropertyData} />
			<PropertyCard propertyData={propertyData} />

			<Crime />
		</div>
	);
}

export default App;
