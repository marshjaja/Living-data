
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropertyCard from "./PropertyCard/PropertyCard"; // Importing PropertyCard component

function SearchBar({ setPropertyData }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(false);

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
