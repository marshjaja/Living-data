// import React, { useState } from "react";
// import Form from "react-bootstrap/Form"; // Importing Form component from react-bootstrap
// import Button from "react-bootstrap/Button"; // Importing Button component from react-bootstrap

// function SearchBar() {
// 	// Using useState hook to manage state variables
// 	const [searchTerm, setSearchTerm] = useState(""); // State variable for the search term
// 	const [propertyData, setPropertyData] = useState(null); // State variable for property data

// 	// Function to handle input change in the search field
// 	const handleInputChange = (e) => {
// 		setSearchTerm(e.target.value); // Updating the search term state with the input value
// 	};

// 	// Function to handle the search action
// 	const handleSearch = async (e) => {
// 		e.preventDefault(); // Preventing default form submission

// 		try {
// 			// Setting up the URL
// 			const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
// 			const autoCompleteOptions = {
// 				method: "GET",
// 				headers: {
// 					"X-RapidAPI-Key":
// 						"b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe",
// 					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
// 				},
// 			};

// 			// Fetching data from the autocomplete API
// 			const autoCompleteResponse = await fetch(
// 				autoCompleteUrl,
// 				autoCompleteOptions
// 			);
// 			const autoCompleteResult = await autoCompleteResponse.json();

// 			// console.log('AutoComplete Result:', autoCompleteResult);

// 			// Extracting the region code from the autocomplete result
// 			const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

// 			// Setting up the URL for second API endpoint property-to-rent
// 			const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
// 			const propertyOptions = {
// 				method: "GET",
// 				headers: {
// 					"X-RapidAPI-Key":
// 						"b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe",
// 					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
// 				},
// 			};

// 			// Fetching property data using the property API
// 			const propertyResponse = await fetch(propertyUrl, propertyOptions);
// 			const propertyResult = await propertyResponse.json();

// 			// console.log('Property Result:', propertyResult);

// 			// Updating the property data state with the fetched data
// 			setPropertyData(propertyResult);
// 		} catch (error) {
// 			// Handling errors
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<>
// 			<div className="d-flex flex-col">
// 				{/* Form for searching */}
// 				<Form onSubmit={handleSearch}>
// 					<Form.Control
// 						size="lg"
// 						type="text"
// 						placeholder="Search by Region name"
// 						value={searchTerm}
// 						onChange={handleInputChange} // Calling handleInputChange function on input change
// 					/>
// 					<Button type="submit" variant="secondary">
// 						Search
// 					</Button>
// 				</Form>
// 			</div>
// 			<br />
// 			{/* Display property data if available */}
// 			{propertyData && (
// 				<div>
// 					{/* Displaying property data from the second API endpoint */}
// 					<h2>Property Details</h2>
// 					{propertyData.data.map((property) => (
// 						<div key={property.id}>
// 							{/* Displaying property details */}
// 							<p>Address: {property.displayAddress}</p>
// 							<p>Price: {property.price.amount} GBP</p>
// 							<img
// 								src={property.propertyImages.mainImageSrc}
// 								alt="Main Image"
// 							/>{" "}
// 							{/* Displaying main property image */}
// 						</div>
// 					))}
// 				</div>
// 			)}
// 		</>
// 	);
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form'; // Importing Form component from react-bootstrap
// import Button from 'react-bootstrap/Button'; // Importing Button component from react-bootstrap

// function SearchBar() {
//     // Using useState hook to manage state variables
//     const [searchTerm, setSearchTerm] = useState(''); // State variable for the search term
//     const [propertyData, setPropertyData] = useState(null); // State variable for property data

//     // Function to handle input change in the search field
//     const handleInputChange = (e) => {
//         setSearchTerm(e.target.value); // Updating the search term state with the input value
//     };

//     // Function to handle the search action
//     const handleSearch = async (e) => {
//         e.preventDefault(); // Preventing default form submission

//         try {
//             // Setting up the URL
//             const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
//             // console.log(searchTerm);
//             const autoCompleteOptions = {
//                 method: 'GET',
//                 headers: {
//                     // 'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
//                     // 'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com',
//                     'X-RapidAPI-Key': '82ec305d5bmsh49968b688af7f99p126625jsn2284021e0d0a',
//                     'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
//                 },
//             };

//             // Fetching data from the autocomplete API
//             const autoCompleteResponse = await fetch(autoCompleteUrl, autoCompleteOptions);
//             const autoCompleteResult = await autoCompleteResponse.json();

//             // console.log('AutoComplete Result:', autoCompleteResult);

//             // Extracting the region code from the autocomplete result
//             const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

//             // Setting up the URL for second API endpoint property-to-rent
//             const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
//             const propertyOptions = {
//                 method: 'GET',
//                 headers: {
//                     // 'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
//                     // 'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com',
//                     'X-RapidAPI-Key': '82ec305d5bmsh49968b688af7f99p126625jsn2284021e0d0a',
//                     'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
//                 },
//             };

//             // Fetching property data using the property API
//             const propertyResponse = await fetch(propertyUrl, propertyOptions);
//             const propertyResult = await propertyResponse.json();

//             console.log('Property Result:', propertyResult);
// console.log(propertyResult);
//             // Updating the property data state with the fetched data
//             setPropertyData( propertyResult);
//         } catch (error) {
//             // Handling errors
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div className='d-flex flex-col'>
//                 {/* Form for searching */}
//                 <Form onSubmit={handleSearch}>
//                     <Form.Control
//                         size='lg'
//                         type='text'
//                         placeholder='Search by Region name'
//                         value={searchTerm}
//                         onChange={handleInputChange} // Calling handleInputChange function on input change
//                     />
//                     <Button type='submit' variant='secondary'>
//                         Search
//                     </Button>
//                 </Form>
//             </div>
//             <br />
//             {/* Display property data if available */}
//             {propertyData && (
//                 <div>
//                     {/* Displaying property data from the second API endpoint */}
//                     <h2>Property Details2</h2>
//                     {propertyData.data.map(property => (
//                         <div key={property.id}>
//                             {/* Displaying property details */}
//                             <p>Address: {property.displayAddress}</p>
//                             <p>Price: {property.price.amount} GBP</p>
//                             <img src={property.propertyImages.mainImageSrc} alt="Main Image" /> {/* Displaying main property image */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// }

// export default SearchBar;
//---------------------------------------------------------v3

// SearchBar.jsx
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import PropertyCard from './charts/PropertyCard'; // Corrected import path

// function SearchBar({ setPropertyData }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [propertyData, setPropertyDataState] = useState(null); // Changed variable name to avoid conflict

//     const handleInputChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();

//         try {
//             const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
//             console.log(searchTerm);
//             const autoCompleteOptions = {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Key': '82ec305d5bmsh49968b688af7f99p126625jsn2284021e0d0a',
//                     'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
//                 },
//             };

//             const autoCompleteResponse = await fetch(autoCompleteUrl, autoCompleteOptions);
//             const autoCompleteResult = await autoCompleteResponse.json();

//             console.log('AutoComplete Result:', autoCompleteResult);

//             const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

//             const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
//             const propertyOptions = {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Key': '82ec305d5bmsh49968b688af7f99p126625jsn2284021e0d0a',
//                     'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
//                 },
//             };

//             const propertyResponse = await fetch(propertyUrl, propertyOptions);
//             const propertyResult = await propertyResponse.json();

//             console.log('Property Result:', propertyResult);

//             // Set property data using setPropertyData function
//             setPropertyData(propertyResult);
//             setPropertyDataState(propertyResult); // Set local state as well
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div className='d-flex flex-col'>
//                 <Form onSubmit={handleSearch}>
//                     <Form.Control
//                         size='lg'
//                         type='text'
//                         placeholder='Search by Region name'
//                         value={searchTerm}
//                         onChange={handleInputChange}
//                     />
//                     <Button type='submit' variant='secondary'>
//                         Search
//                     </Button>
//                 </Form>
//             </div>
//             {/* Pass propertyData as a prop to the PropertyCard component */}
//             <PropertyCard propertyData={propertyData} />
//         </>
//     );
// }

// export default SearchBar;

//------------------------------

// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import PropertyCard from './charts/PropertyCard'; // Corrected import path

// function SearchBar({ setPropertyData }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [propertyData, setPropertyDataState] = useState(null); // Changed variable name to avoid conflict

//     const handleInputChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();

//         try {
//             const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
//             console.log(searchTerm);
//             const autoCompleteOptions = {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Key': '82ec305d5bmsh49968b688af7f99p126625jsn2284021e0d0a',
//                     'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
//                 },
//             };

//             const autoCompleteResponse = await fetch(autoCompleteUrl, autoCompleteOptions);
//             const autoCompleteResult = await autoCompleteResponse.json();

//             console.log('AutoComplete Result:', autoCompleteResult);

//             const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

//             const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
//             const propertyOptions = {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Key': '82ec305d5bmsh49968b688af7f99p126625jsn2284021e0d0a',
//                     'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
//                 },
//             };

//             const propertyResponse = await fetch(propertyUrl, propertyOptions);
//             const propertyResult = await propertyResponse.json();

//             console.log('Property Result:', propertyResult);

//             // Set property data using setPropertyData function
//             setPropertyData(propertyResult);
//             setPropertyDataState(propertyResult); // Set local state as well
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div className='d-flex flex-col'>
//                 <Form onSubmit={handleSearch}>
//                     <Form.Control
//                         size='lg'
//                         type='text'
//                         placeholder='Search by Region name'
//                         value={searchTerm}
//                         onChange={handleInputChange}
//                     />
//                     <Button type='submit' variant='secondary'>
//                         Search
//                     </Button>
//                 </Form>
//             </div>
//             {/* Pass propertyData as a prop to the PropertyCard component */}
//             <PropertyCard propertyData={propertyData} />
//         </>
//     );
// }

// export default SearchBar;

// //-----------------------------------------------
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropertyCard from "./PropertyCard/PropertyCard"; // Importing PropertyCard component

import {
	boroughCoordinates,
	neighbourhoodsData,
} from "../../data/neighbourhoodData";

function SearchBar({ setPropertyData, setCrimeData }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(false);
	const [rateColor, setRateColor] = useState("");
	const [crimeRate, setCrimeRate] = useState("");

	const findBoroughForNeighbourhood = (input) => {
		for (const neighbourhood in neighbourhoodsData) {
			if (neighbourhoodsData[neighbourhood].includes(input.toLowerCase())) {
				return neighbourhood;
			}
		}
		return null;
	};

	const getCrimeData = async (borough) => {
		if (boroughCoordinates.hasOwnProperty(borough)) {
			const { latitude, longitude } = boroughCoordinates[borough];
			const date = "2023-12";
			const crimeUrl = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`;
			


			try {
				const response = await fetch(crimeUrl);
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();

				const crimeCounts = {};
				data.forEach((crime) => {
					const category = crime.category.toLowerCase();
					crimeCounts[category] = (crimeCounts[category] || 0) + 1;
				});

				console.clear();
				for (const category in crimeCounts) {
					console.log(`${category}: ${crimeCounts[category]}`);
				}

				const totalCrimes = Object.values(crimeCounts).reduce(
					(sum, current) => sum + current,
					0
				);

				let rate, color;
				if (totalCrimes <= 75) {
					rate = "Low";
					color = "success";
				} else if (totalCrimes > 75 && totalCrimes <= 147) {
					rate = "Moderate";
					color = "warning";
				} else if (totalCrimes > 147 && totalCrimes <= 302) {
					rate = "Medium";
					color = "secondary";
				} else {
					rate = "High";
					color = "danger";
				}

				setCrimeRate(rate);
				setRateColor(color);

				// here we call for setCrimeData
				// how do we save both pieces of data input our setCrimeData update method(?)
				const CrimeResponse = await fetch(crimeUrl);
				const CrimeResult = await CrimeResponse.json();
				console.log(CrimeResult)
	
				setCrimeData(CrimeResult);
				// setCrimeRate(rate);
				// setRateColor(color);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		} else {
			alert("Borough not found. Please enter a valid borough name.");
		}
	};

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		setLoading(true);
		
	
		if (boroughCoordinates.hasOwnProperty(searchTerm)) {
			getCrimeData(searchTerm);
		} else {
			const borough = findBoroughForNeighbourhood(searchTerm);
			if (borough) {
				getCrimeData(borough);
			} else {
				alert("Please enter a valid borough or neighbourhood name.");
			}
		}
		// setInput("");

		try {
			const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
			const autoCompleteOptions = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
					"72af507e69msh04ba0c14cca9fe0p1556b3jsn418cd33a3d80",
					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
				},
			};

			const autoCompleteResponse = await fetch(
				autoCompleteUrl,
				autoCompleteOptions
			);
			const autoCompleteResult = await autoCompleteResponse.json();

			const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

			const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
			const propertyOptions = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"72af507e69msh04ba0c14cca9fe0p1556b3jsn418cd33a3d80",
					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
				},
			};

			const propertyResponse = await fetch(propertyUrl, propertyOptions);
			const propertyResult = await propertyResponse.json();

			setPropertyData(propertyResult);

			// Think about putting the CRIME API REQUEST CODE  in THIS FUNCTION HERE

		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<Form onSubmit={handleSearch}>
				<Form.Control
					type="text"
					placeholder="Search by Region name"
					value={searchTerm}
					onChange={handleInputChange}
				/>
				<Button type="submit" disabled={loading}>
					{loading ? "Searching..." : "Search"}
				</Button>
			</Form>
		</div>
	);
}

export default SearchBar;
