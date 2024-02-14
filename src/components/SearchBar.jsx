import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import PropertyCard from "./PropertyCard/PropertyCard";
import { boroughCoordinates } from "../../data/neighbourhoodData";

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
				console.log(CrimeResult);

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

			const propertyUrl = `https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=${regionCode}&search_radius=0.0`;
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

			// Think about putting the CRIME API REQUEST CODE  in THIS FUNCTION HERE
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
