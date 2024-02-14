import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import ContactForm from "./components/ContactForm";
import Crime from "./components/Crime";

function App() {
	const [propertyData, setPropertyData] = useState(null);
	const [crimeData, setCrimeData] = useState(null);
	const [crimeRate, setCrimeRate] = useState(null);

	return (
		<div>
			<ContactForm />
			<h1>Property Listings</h1>
			<SearchBar
				setPropertyData={setPropertyData}
				setCrimeData={setCrimeData}
				setCrimeRate={setCrimeRate}
			/>
			<Crime crimeRate={crimeRate} crimeData={crimeData} />
			<PropertyCard propertyData={propertyData} />
		</div>
	);
}

export default App;
