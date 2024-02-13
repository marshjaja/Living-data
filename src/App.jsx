
import React, { useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import About from "./components/About";
import Crime from "./components/Crime"; // Import the Crime component
import Footer from './components/Footer';

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
			<About />

			
			<Crime /> {/* Render the Crime component */}
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
