// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Swal from "sweetalert2";
// import PropertyCard from "./PropertyCard/PropertyCard";
// import { boroughCoordinates } from "../../data/neighbourhoodData";

// function SearchBar({ setPropertyData, setCrimeData, setCrimeRate }) {
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [loading, setLoading] = useState(false);

// 	const handleInputChange = (e) => {
// 		setSearchTerm(e.target.value);
// 	};

// 	const handleSearch = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);

// 		try {
// 			const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
// 			const autoCompleteOptions = {
// 				method: "GET",
// 				headers: {
// 					"X-RapidAPI-Key":
// 						"8141a479b1msh7e4360c5cde8d0dp1d7b7fjsndeddaa2930bb",
// 					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
// 				},
// 			};

// 			const autoCompleteResponse = await fetch(
// 				autoCompleteUrl,
// 				autoCompleteOptions
// 			);
// 			const autoCompleteResult = await autoCompleteResponse.json();

// 			const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

// 			const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
// 			const propertyOptions = {
// 				method: "GET",
// 				headers: {
// 					"X-RapidAPI-Key":
// 						"8141a479b1msh7e4360c5cde8d0dp1d7b7fjsndeddaa2930bb",
// 					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
// 				},
// 			};

// 			const propertyResponse = await fetch(propertyUrl, propertyOptions);
// 			const propertyResult = await propertyResponse.json();
// 			//start from here
// 			//data from neighbourhoodData.js
// 			const latitude = boroughCoordinates[searchTerm].latitude;
// 			const longitude = boroughCoordinates[searchTerm].longitude;
// 			//hard coded
// 			const date1 = "2023-12";
// 			// fetch crime data
// 			const crimeRate = await fetch(
// 				`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date1}`
// 			);
// 			// data from crimeRate
// 			const crimeRateResult = await crimeRate.json();
// 			// object with crime data in format property = name of the crime, value = number of this crime commited in the area ie. burglary: 73
// 			const crimeObject = {};
// 			// array with types of crimes commited in the area
// 			const crimeRateData = crimeRateResult.forEach((crime) => {
// 				if (crimeObject[crime.category]) {
// 					crimeObject[crime.category] += 1;
// 				} else {
// 					crimeObject[crime.category] = 1;
// 				}
// 			});
// 			// data for the crime rate
// 			setCrimeRate(crimeObject["violent-crime"]);
// 			setCrimeData(crimeObject);
// 			// total number of crimes commited in the area
// 			const totalCrimes = crimeRateResult.length;
// 			// console.log({totalCrimes})
// 			// console.log(crimeObject);
// 			// console.log(propertyResult);
// 			setPropertyData(propertyResult);
// 		} catch (error) {
// 			console.error(error);
// 			Swal.fire({
// 				icon: "error",
// 				title: "Not even Sherlock Holmes could find this location",
// 				text: "Try entering a valid area or borough!",
// 				customClass: {
// 					popup: "my-popup",
// 					title: "my-title",
// 					confirmButton: "my-confirm-button",
// 				},
// 				buttonsStyling: false,
// 			});
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div>
// 			<Form onSubmit={handleSearch}>
// 				<Form.Control
// 					type="text"
// 					placeholder="Search by Region name"
// 					value={searchTerm}
// 					onChange={handleInputChange}
// 				/>
// 				<Button type="submit" disabled={loading}>
// 					{loading ? "Searching..." : "Search"}
// 				</Button>
// 			</Form>
// 		</div>
// 	);
// }

// export default SearchBar;

// ==========================================
// ==========================================
// ==========================================
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";
import PropertyCard from "./PropertyCard/PropertyCard";
import { boroughCoordinates } from "../../data/neighbourhoodData";
import "./SearchBar.css"

function SearchBar({ setPropertyData, setCrimeData, setCrimeRate }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [loading, setLoading] = useState(false);
	const priceOptions = [
		"400",
		"600",
		"800",
		"1000",
		"1200",
		"1400",
		"1600",
		"1750",
		"2000",
		"2250",
		"2500",
		"2750",
		"3000",
		"3500",
		"4000",
		"4500",
		"5000",
		"5500",
		"6000",
		"6500",
		"7000",
		"8000",
		"9000",
		"10000",
		"12500",
		"15000",
		"17500",
		"20000",
		"25000",
		"30000",
		"35000",
		"40000",
	];

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const autoCompleteUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/auto-complete?location=${searchTerm}`;
			const autoCompleteOptions = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"8141a479b1msh7e4360c5cde8d0dp1d7b7fjsndeddaa2930bb",
					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
				},
			};

			const autoCompleteResponse = await fetch(
				autoCompleteUrl,
				autoCompleteOptions
			);
			const autoCompleteResult = await autoCompleteResponse.json();

			const regionCode = autoCompleteResult?.data[0]?.locationIdentifier;

			const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0&min_price=${minPrice}&max_price=${maxPrice}`;
			const propertyOptions = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"8141a479b1msh7e4360c5cde8d0dp1d7b7fjsndeddaa2930bb",
					"X-RapidAPI-Host": "uk-real-estate-rightmove.p.rapidapi.com",
				},
			};

			const propertyResponse = await fetch(propertyUrl, propertyOptions);
			const propertyResult = await propertyResponse.json();

			if (!propertyResult.data || propertyResult.data.length === 0) {
				Swal.fire({
					icon: "warning",
					title: "No properties found",
					text: `No properties found within the price range £${minPrice} to £${maxPrice}. Please adjust your search criteria.`,
					customClass: {
						popup: "my-popup",
						title: "my-title",
						confirmButton: "my-confirm-button",
					},
					buttonsStyling: false,
				});
			} else {
				// If properties are found, proceed with setting the property data
				setPropertyData(propertyResult);
			}
			//start from here
			//data from neighbourhoodData.js
			const latitude = boroughCoordinates[searchTerm].latitude;
			const longitude = boroughCoordinates[searchTerm].longitude;
			//hard coded
			const date1 = "2023-12";
			// fetch crime data
			const crimeRate = await fetch(
				`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date1}`
			);
			// data from crimeRate
			const crimeRateResult = await crimeRate.json();
			// object with crime data in format property = name of the crime, value = number of this crime commited in the area ie. burglary: 73
			const crimeObject = {};
			// array with types of crimes commited in the area
			const crimeRateData = crimeRateResult.forEach((crime) => {
				if (crimeObject[crime.category]) {
					crimeObject[crime.category] += 1;
				} else {
					crimeObject[crime.category] = 1;
				}
			});
			// data for the crime rate
			setCrimeRate(crimeObject["violent-crime"]);
			setCrimeData(crimeObject);
			// total number of crimes commited in the area
			const totalCrimes = crimeRateResult.length;
			// console.log({totalCrimes})
			// console.log(crimeObject);
			// console.log(propertyResult);
			setPropertyData(propertyResult);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Not even Sherlock Holmes could find this location",
				text: "Try entering a valid area or borough!",
				customClass: {
					popup: "my-popup",
					title: "my-title",
					confirmButton: "my-confirm-button",
				},
				buttonsStyling: false,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="search-bar-container"  >
			<Form onSubmit={handleSearch}>
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Search by Region name"
						value={searchTerm}
						onChange={handleInputChange}
					/>
				</Form.Group>

				<div className="d-flex flex-row justify-content-end mt-2">
					<Dropdown
						onSelect={(eventKey) => setMinPrice(eventKey)}
						className="me-2"
					>
						<Dropdown.Toggle
							variant="success"
							id="dropdown-min-price"
							className="custom-dropdown-toggle"
						>
							Min Price: {minPrice || "Any"}
						</Dropdown.Toggle>
						<Dropdown.Menu className="scrollable-menu">
							{priceOptions.map((price) => (
								<Dropdown.Item
									key={price}
									eventKey={price}
								>{`£${price}`}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown
						onSelect={(eventKey) => setMaxPrice(eventKey)}
						className="me-2"
					>
						<Dropdown.Toggle
							variant="success"
							id="dropdown-max-price"
							className="custom-dropdown-toggle"
						>
							Max Price: {maxPrice || "Any"}
						</Dropdown.Toggle>
						<Dropdown.Menu className="scrollable-menu">
							{priceOptions.map((price) => (
								<Dropdown.Item
									key={price}
									eventKey={price}
								>{`£${price}`}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>

					<Button
						type="submit"
						disabled={loading}
						className="custom-search-button"
					>
						{loading ? "Searching..." : "Search"}
					</Button>
				</div>
			</Form>
		</div>
	);
}
export default SearchBar;
