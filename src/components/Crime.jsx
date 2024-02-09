import React, { useState } from "react";
import {
	boroughCoordinates,
	neighbourhoodsData,
} from "../../data/neighbourhoodData";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Crime() {
	const [input, setInput] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const findBoroughForNeighbourhood = (input) => {
		for (const neighbourhood in neighbourhoodsData) {
			const neighbourHoodInBorough = neighbourhoodsData[neighbourhood];
			if (neighbourHoodInBorough.includes(input.toLowerCase())) {
				return neighbourhood;
			}
		}
		return null;
	};

	const getCrimeData = async (borough) => {
		if (boroughCoordinates.hasOwnProperty(borough)) {
			const { latitude, longitude } = boroughCoordinates[borough];
			const date = "2023-12";
			const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`;

			try {
				const response = await fetch(url);
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
					// console.log("-------------------------------------");
					console.log(`${category}: ${crimeCounts[category]}`);
				}
				// console.log("*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		} else {
			alert("Borough not found. Please enter a valid borough name.");
		}
	};

	const handleSearch = () => {
		const userSearchTerm = input.trim().toLowerCase();
		console.log("User searched for:", userSearchTerm);
		setSearchTerm(userSearchTerm);

		if (boroughCoordinates.hasOwnProperty(userSearchTerm)) {
			getCrimeData(userSearchTerm);
		} else {
			const borough = findBoroughForNeighbourhood(userSearchTerm);
			if (borough) {
				getCrimeData(borough);
			} else {
				alert("Please enter a valid borough or neighbourhood name.");
			}
		}
		setInput("");
	};

	return (
		<div className="container mt-3">
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Enter borough or neighbourhood"
					aria-label="Enter borough or neighbourhood"
					aria-describedby="searchButton"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyPress={(e) => e.key === "Enter" && handleSearch()}
				/>
				<Button
					variant="outline-secondary"
					onClick={handleSearch}
					id="searchButton"
				>
					Search
				</Button>
			</InputGroup>
			{searchTerm && (
				<div className="feedback mt-3">
					You searched for: <strong>{searchTerm}</strong>
				</div>
			)}
		</div>
	);
}

export default Crime;
