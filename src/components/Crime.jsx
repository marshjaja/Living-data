// import React, { useState } from "react";
// import {
// 	boroughCoordinates,
// 	neighbourhoodsData,
// } from "../../data/neighbourhoodData";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

// import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/css/bootstrap.min.css";

// function Crime() {
// 	const [input, setInput] = useState("");
// 	const [searchTerm, setSearchTerm] = useState("");

// 	const findBoroughForNeighbourhood = (input) => {
// 		for (const neighbourhood in neighbourhoodsData) {
// 			const neighbourHoodInBorough = neighbourhoodsData[neighbourhood];
// 			if (neighbourHoodInBorough.includes(input.toLowerCase())) {
// 				return neighbourhood;
// 			}
// 		}
// 		return null;
// 	};

// 	const getCrimeData = async (borough) => {
// 		if (boroughCoordinates.hasOwnProperty(borough)) {
// 			const { latitude, longitude } = boroughCoordinates[borough];
// 			const date = "2023-12";
// 			const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`;

// 			try {
// 				const response = await fetch(url);
// 				if (!response.ok) {
// 					throw new Error(`HTTP error! Status: ${response.status}`);
// 				}
// 				const data = await response.json();

// 				const crimeCounts = {};
// 				data.forEach((crime) => {
// 					const category = crime.category.toLowerCase();
// 					crimeCounts[category] = (crimeCounts[category] || 0) + 1;
// 				});

// 				console.clear();
// 				for (const category in crimeCounts) {
// 					// console.log("-------------------------------------");
// 					console.log(`${category}: ${crimeCounts[category]}`);
// 				}
// 				// console.log("*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
// 			} catch (error) {
// 				console.error("Failed to fetch data:", error);
// 			}
// 		} else {
// 			alert("Borough not found. Please enter a valid borough name.");
// 		}
// 	};

// 	const handleSearch = () => {
// 		const userSearchTerm = input.trim().toLowerCase();
// 		console.log("User searched for:", userSearchTerm);
// 		setSearchTerm(userSearchTerm);

// 		if (boroughCoordinates.hasOwnProperty(userSearchTerm)) {
// 			getCrimeData(userSearchTerm);
// 		} else {
// 			const borough = findBoroughForNeighbourhood(userSearchTerm);
// 			if (borough) {
// 				getCrimeData(borough);
// 			} else {
// 				alert("Please enter a valid borough or neighbourhood name.");
// 			}
// 		}
// 		setInput("");
// 	};

// 	return (
// 		<div className="container mt-3">
// 			<InputGroup className="mb-3">
// 				<FormControl
// 					placeholder="Enter borough or neighbourhood"
// 					aria-label="Enter borough or neighbourhood"
// 					aria-describedby="searchButton"
// 					value={input}
// 					onChange={(e) => setInput(e.target.value)}
// 					onKeyPress={(e) => e.key === "Enter" && handleSearch()}
// 				/>
// 				<Button
// 					variant="outline-secondary"
// 					onClick={handleSearch}
// 					id="searchButton"
// 				>
// 					Search
// 				</Button>
// 			</InputGroup>
// 			{searchTerm && (
// 				<div className="feedback mt-3">
// 					You searched for: <strong>{searchTerm}</strong>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default Crime;


import React, { useState } from "react";
import {
	boroughCoordinates,
	neighbourhoodsData,
} from "../../data/neighbourhoodData";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Collapse, Image } from "react-bootstrap";

function Crime() {
	const [input, setInput] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [crimeRate, setCrimeRate] = useState("");
	const [rateColor, setRateColor] = useState("");
	const [open, setOpen] = useState(false);

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
				<div>
					<div className="feedback mt-3">
						You searched for: <strong>{searchTerm}</strong>
					</div>
					{crimeRate && (
						<Alert variant={rateColor} className="mt-3">
							Crime Rate: <strong>{crimeRate}</strong>
						</Alert>
					)}
				</div>
			)}
			{searchTerm && (
				<div>
					<div className="feedback mt-3">
						You searched for: <strong>{searchTerm}</strong>
					</div>
					{crimeRate && (
						<Alert variant={rateColor} className="mt-3">
							Crime Rate: <strong>{crimeRate}</strong>
						</Alert>
					)}
					<Button
						onClick={() => setOpen(!open)}
						aria-controls="collapse-text"
						aria-expanded={open}
					>
						More Crime Data
					</Button>
					<Collapse in={open}>
						<div id="collapse-text" className="mt-3">
							<Card>
								<Card.Body>
									<Image src="..." class="card-img-top" alt="..." />
									<div class="card-body">
										<h5 class="card-title placeholder-glow">
											<span class="placeholder col-6"></span>
										</h5>
										<p class="card-text placeholder-glow">
											<span class="placeholder col-7"></span>
											<span class="placeholder col-4"></span>
											<span class="placeholder col-4"></span>
											<span class="placeholder col-6"></span>
											<span class="placeholder col-8"></span>
										</p>
										<a
											class="btn btn-primary disabled placeholder col-6"
											aria-disabled="true"
										></a>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Collapse>
					{/* //note MORE DATA IN ALERT CARD */}
					{crimeRate && (
						<Alert variant={rateColor} className="mt-3">
							Crime Rate: <strong>{crimeRate}</strong>
							<Button
								onClick={() => setOpen(!open)}
								aria-controls="collapse-text"
								aria-expanded={open}
							>
								More Crime Data
							</Button>
							<Collapse in={open}>
								<div id="collapse-text" className="mt-3">
									<Card>
										<Card.Body>
											<Image src="..." class="card-img-top" alt="..." />
											<div class="card-body">
												<h5 class="card-title placeholder-glow">
													<span class="placeholder col-6"></span>
												</h5>
												<p class="card-text placeholder-glow">
													<span class="placeholder col-7"></span>
													<span class="placeholder col-4"></span>
													<span class="placeholder col-4"></span>
													<span class="placeholder col-6"></span>
													<span class="placeholder col-8"></span>
												</p>
												<a
													class="btn btn-primary disabled placeholder col-6"
													aria-disabled="true"
												></a>
											</div>
										</Card.Body>
									</Card>
								</div>
							</Collapse>
						</Alert>
					)}
				</div>
			)}
		</div>
	);
//------------------------------------------------------------------------

// import React, { useState } from "react";
// import {
//   boroughCoordinates,
//   neighbourhoodsData,
// } from "../../data/neighbourhoodData"; // Importing data needed for crime analysis
// import InputGroup from "react-bootstrap/InputGroup"; // Importing InputGroup component from react-bootstrap
// import FormControl from "react-bootstrap/FormControl"; // Importing FormControl component from react-bootstrap
// import Button from "react-bootstrap/Button"; // Importing Button component from react-bootstrap

// // Function component for Crime analysis
// function Crime() {
//   // State variables to handle input and search term
//   const [input, setInput] = useState(""); // State variable for input
//   const [searchTerm, setSearchTerm] = useState(""); // State variable for search term

//   // Function to find the borough for a given neighbourhood
//   const findBoroughForNeighbourhood = (input) => {
//     for (const neighbourhood in neighbourhoodsData) {
//       const neighbourHoodInBorough = neighbourhoodsData[neighbourhood];
//       if (neighbourHoodInBorough.includes(input.toLowerCase())) {
//         return neighbourhood;
//       }
//     }
//     return null;
//   };

//   // Function to fetch crime data for a given borough
//   const getCrimeData = async (borough) => {
//     // Checking if the borough exists in the data
//     if (boroughCoordinates.hasOwnProperty(borough)) {
//       // Extracting latitude and longitude for the borough
//       const { latitude, longitude } = boroughCoordinates[borough];
//       const date = "2023-12";
//       const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();

//         // Processing crime data to count occurrences of each category
//         const crimeCounts = {};
//         data.forEach((crime) => {
//           const category = crime.category.toLowerCase();
//           crimeCounts[category] = (crimeCounts[category] || 0) + 1;
//         });

//         // Displaying crime counts in the console
//         console.clear();
//         for (const category in crimeCounts) {
//           console.log(`${category}: ${crimeCounts[category]}`);
//         }
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//       }
//     } else {
//       // Alerting if the borough is not found
//       alert("Borough not found. Please enter a valid borough name.");
//     }
//   };

//   // Function to handle search button click
//   const handleSearch = () => {
//     const userSearchTerm = input.trim().toLowerCase();
//     console.log("User searched for:", userSearchTerm);
//     setSearchTerm(userSearchTerm);

//     // Checking if the input is a borough
//     if (boroughCoordinates.hasOwnProperty(userSearchTerm)) {
//       getCrimeData(userSearchTerm);
//     } else {
//       // If not a borough, try to find the borough for the neighbourhood
//       const borough = findBoroughForNeighbourhood(userSearchTerm);
//       if (borough) {
//         getCrimeData(borough);
//       } else {
//         // Alerting if neither a borough nor a neighbourhood is found
//         alert("Please enter a valid borough or neighbourhood name.");
//       }
//     }
//     setInput(""); // Clearing input after search
//   };

//   // JSX code for rendering the component
//   return (
//     <div className="container mt-3">
//       {/* Input field and search button */}
//       <InputGroup className="mb-3">
//         <FormControl
//           placeholder="Enter borough or neighbourhood"
//           aria-label="Enter borough or neighbourhood"
//           aria-describedby="searchButton"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//           />
        
//         <Button
//           variant="outline-secondary"
//           onClick={handleSearch}
//           id="searchButton"
//         >
//           Search
//         </Button>
//       </InputGroup>
//       {/* Displaying feedback if a search term exists */}
//       {searchTerm && (
//         <div className="feedback mt-3">
//           You searched for: <strong>{searchTerm}</strong>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Crime;

//------------------------------------------------------
import React, { useState, useEffect } from "react";
import { boroughCoordinates, neighbourhoodsData } from "../../data/neighbourhoodData"; // Importing data needed for crime analysis

// Function component for Crime analysis
function Crime({ searchTerm }) {
    // State variable to hold crime data
    const [crimeData, setCrimeData] = useState(null);

    // Function to find the borough for a given neighbourhood
    const findBoroughForNeighbourhood = (input) => {
        for (const neighbourhood in neighbourhoodsData) {
            const neighbourHoodInBorough = neighbourhoodsData[neighbourhood];
            if (neighbourHoodInBorough.includes(input.toLowerCase())) {
                return neighbourhood;
            }
        }
        return null;
    };

    // Function to fetch crime data for a given borough
    const getCrimeData = async (borough) => {
        // Checking if the borough exists in the data
        if (boroughCoordinates.hasOwnProperty(borough)) {
            // Extracting latitude and longitude for the borough
            const { latitude, longitude } = boroughCoordinates[borough];
            const date = "2023-12";
            const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                // Processing crime data to count occurrences of each category
                const crimeCounts = {};
                data.forEach((crime) => {
                    const category = crime.category.toLowerCase();
                    crimeCounts[category] = (crimeCounts[category] || 0) + 1;
                });

                // Setting crime data in state
                setCrimeData(crimeCounts);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        } else {
            // Alerting if the borough is not found
            alert("Borough not found. Please enter a valid borough name.");
        }
    };

    // Effect to fetch crime data when searchTerm changes
    useEffect(() => {
        if (searchTerm) {
            // Checking if the searchTerm is a borough
            if (boroughCoordinates.hasOwnProperty(searchTerm)) {
                getCrimeData(searchTerm);
            } else {
                // If not a borough, try to find the borough for the neighbourhood
                const borough = findBoroughForNeighbourhood(searchTerm);
                if (borough) {
                    getCrimeData(borough);
                } else {
                    // Alerting if neither a borough nor a neighbourhood is found
                    alert("Please enter a valid borough or neighbourhood name.");
                }
            }
        }
    }, [searchTerm]);

    // JSX code for rendering the component
    return (
        <div className="container mt-3">
            {/* Displaying feedback if a search term exists */}
            {searchTerm && (
                <div className="feedback mt-3">
                    You searched for: <strong>{searchTerm}</strong>
                </div>
            )}
            {/* Displaying crime data if available */}
            {crimeData && (
                <div className="crime-data mt-3">
                    <h2>Crime Data</h2>
                    <ul>
                        {Object.entries(crimeData).map(([category, count]) => (
                            <li key={category}>{`${category}: ${count}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Crime;


{
	/* <div className="container mt-3">
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
		<div>
			<div className="feedback mt-3">
				You searched for: <strong>{searchTerm}</strong>
			</div>
			{crimeRate && (
				<Alert variant={rateColor} className="mt-3">
					Overall Crime Rate: <strong>{crimeRate}</strong>
				</Alert>
			)}
			<Alert variant={rateColor} className="mt-3">
				<Card>
					<Card.Header as="h5">Overall Crime Status</Card.Header>
					<Card.Body>
						<Card.Title>{crimeRate} Crime Rate</Card.Title>
						<Card.Text>
							The overall {searchTerm} is categorized as {crimeRate}. This is
							based on a total of {crimeRate} reported incidents.
						</Card.Text>
					</Card.Body>
				</Card>
			</Alert>
		</div>
	)}
	{searchTerm && (
		<>
			<Alert variant={rateColor} className="mt-3">
				<Card>
					<Card.Body>
						Overall Crime Rate: <strong>{crimeRate}</strong>
					</Card.Body>
				</Card>
			</Alert>
			<Button
				onClick={() => setOpen(!open)}
				aria-controls="collapse-text"
				aria-expanded={open}
			>
				Toggle details
			</Button>
			<Collapse in={open}>
				<div id="collapse-text" className="mt-3">
					<Card>
						<Card.Body>
							This is some placeholder content for a collapsible panel. It's
							hidden by default and shown when the button is clicked.
						</Card.Body>
					</Card>
				</div>
			</Collapse>
		</>
	)}
</div>; */
}
