// import React, { useState } from "react";
// import {
// 	boroughCoordinates,
// 	neighbourhoodsData,
// } from "../../data/neighbourhoodData";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Collapse, Image } from "react-bootstrap";

// function Crime() {
// 	const [input, setInput] = useState("");
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [crimeRate, setCrimeRate] = useState("");
// 	const [rateColor, setRateColor] = useState("");
// 	const [open, setOpen] = useState(false);

// 	const findBoroughForNeighbourhood = (input) => {
// 		for (const neighbourhood in neighbourhoodsData) {
// 			if (neighbourhoodsData[neighbourhood].includes(input.toLowerCase())) {
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
// 					console.log(`${category}: ${crimeCounts[category]}`);
// 				}

// 				const totalCrimes = Object.values(crimeCounts).reduce(
// 					(sum, current) => sum + current,
// 					0
// 				);

// 				let rate, color;
// 				if (totalCrimes <= 75) {
// 					rate = "Low";
// 					color = "success";
// 				} else if (totalCrimes > 75 && totalCrimes <= 147) {
// 					rate = "Moderate";
// 					color = "warning";
// 				} else if (totalCrimes > 147 && totalCrimes <= 302) {
// 					rate = "Medium";
// 					color = "secondary";
// 				} else {
// 					rate = "High";
// 					color = "danger";
// 				}

// 				setCrimeRate(rate);
// 				setRateColor(color);
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
// 				<div>
// 					<div className="feedback mt-3">
// 						You searched for: <strong>{searchTerm}</strong>
// 					</div>
// 					{crimeRate && (
// 						<Alert variant={rateColor} className="mt-3">
// 							Crime Rate: <strong>{crimeRate}</strong>
// 						</Alert>
// 					)}
// 				</div>
// 			)}
// 			{searchTerm && (
// 				<div>
// 					<div className="feedback mt-3">
// 						You searched for: <strong>{searchTerm}</strong>
// 					</div>
// 					{crimeRate && (
// 						<Alert variant={rateColor} className="mt-3">
// 							Crime Rate: <strong>{crimeRate}</strong>
// 						</Alert>
// 					)}
// 					<Button
// 						onClick={() => setOpen(!open)}
// 						aria-controls="collapse-text"
// 						aria-expanded={open}
// 					>
// 						More Crime Data
// 					</Button>
// 					<Collapse in={open}>
// 						<div id="collapse-text" className="mt-3">
// 							<Card>
// 								<Card.Body>
// 									<Image src="..." class="card-img-top" alt="..." />
// 									<div class="card-body">
// 										<h5 class="card-title placeholder-glow">
// 											<span class="placeholder col-6"></span>
// 										</h5>
// 										<p class="card-text placeholder-glow">
// 											<span class="placeholder col-7"></span>
// 											<span class="placeholder col-4"></span>
// 											<span class="placeholder col-4"></span>
// 											<span class="placeholder col-6"></span>
// 											<span class="placeholder col-8"></span>
// 										</p>
// 										<a
// 											class="btn btn-primary disabled placeholder col-6"
// 											aria-disabled="true"
// 										></a>
// 									</div>
// 								</Card.Body>
// 							</Card>
// 						</div>
// 					</Collapse>
// 					{/* //note MORE DATA IN ALERT CARD */}
// 					{crimeRate && (
// 						<Alert variant={rateColor} className="mt-3">
// 							Crime Rate: <strong>{crimeRate}</strong>
// 							<Button
// 								onClick={() => setOpen(!open)}
// 								aria-controls="collapse-text"
// 								aria-expanded={open}
// 							>
// 								More Crime Data
// 							</Button>
// 							<Collapse in={open}>
// 								<div id="collapse-text" className="mt-3">
// 									<Card>
// 										<Card.Body>
// 											<Image src="..." class="card-img-top" alt="..." />
// 											<div class="card-body">
// 												<h5 class="card-title placeholder-glow">
// 													<span class="placeholder col-6"></span>
// 												</h5>
// 												<p class="card-text placeholder-glow">
// 													<span class="placeholder col-7"></span>
// 													<span class="placeholder col-4"></span>
// 													<span class="placeholder col-4"></span>
// 													<span class="placeholder col-6"></span>
// 													<span class="placeholder col-8"></span>
// 												</p>
// 												<a
// 													class="btn btn-primary disabled placeholder col-6"
// 													aria-disabled="true"
// 												></a>
// 											</div>
// 										</Card.Body>
// 									</Card>
// 								</div>
// 							</Collapse>
// 						</Alert>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// }
// export default Crime;
//----------------------------------------------^ original file

import React, { useState, useEffect } from "react";
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
import BarChart from "./Chart/BarChart"; // *** Import the BarChart component

function Crime() {
    const [input, setInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [crimeRate, setCrimeRate] = useState("");
    const [rateColor, setRateColor] = useState("");
    const [open, setOpen] = useState(false);
    const [crimeCounts, setCrimeCounts] = useState({});//***  State
    const [chartData, setChartData] = useState(null); // *** State for chart data

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

                const counts = {};
                data.forEach((crime) => {
                    const category = crime.category.toLowerCase();
                    counts[category] = (counts[category] || 0) + 1;
                });

                console.clear();
                for (const category in counts) {
                    console.log(`${category}: ${counts[category]}`);
                }

                const totalCrimes = Object.values(counts).reduce(
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

                setCrimeCounts(counts);//***  function call that updates the state variable 
                setCrimeRate(rate);
                setRateColor(color);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        } else {
            alert("Borough not found. Please enter a valid borough name.");
        }
    };
//*** useEffect used here to ensure that the chart data is updated- start
    useEffect(() => {
        // *** Generate chart data based on crimeCounts and update chartData state
        const generateChartData = () => {
            const data = {
                labels: Object.keys(crimeCounts),
                datasets: [
                    {
                        label: "Number of Crimes",
                        data: Object.values(crimeCounts),
                        backgroundColor: "rgba(75,192,192,1)",
                    },
                ],
            };
            setChartData(data);
        };

        if (Object.keys(crimeCounts).length > 0) {
            generateChartData();
        }
    }, [crimeCounts]);

	//*** useEffect end

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
                    {Object.keys(crimeCounts).map((category, index) => (
                        <div key={index}>{`${category}: ${crimeCounts[category]}`}</div>
                    ))}
                    {rateColor && (
                        <Alert variant={rateColor} className="mt-3">
                            Crime Rate: <strong>{rateColor}</strong>
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
                    {/* MORE DATA IN ALERT CARD */}
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
            {/* Display the chart */}
            {chartData && <BarChart chartData={chartData} />} {/* *** Render the BarChart component */}
        </div>
    );
}

export default Crime;

