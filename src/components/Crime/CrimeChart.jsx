// import React from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// // const data = {
// // 	labels: [
// // 		"Dagenham",
// // 		"Barking",
// // 		"Barnet",
// // 		"Bexley",
// // 		"Brent",
// // 		"Bromley",
// // 		"Camden",
// // 		"Chelsea",
// // 		"Croydon",
// // 		"Ealing",
// // 		"Enfield",
// // 		"Greenwich",
// // 		"Hackney",
// // 		"Hammersmith",
// // 		"Fulham",
// // 		"Hamlets",
// // 		"Haringey",
// // 		"Harrow",
// // 		"Havering",
// // 		"Hillingdon",
// // 		"Hounslow",
// // 		"Islington",
// // 		"Kensington",
// // 		"Kingston",
// // 		"Lambeth",
// // 		"Lewisham",
// // 		"Limehouse",
// // 		"Merton",
// // 		"Newham",
// // 		"Redbridge",
// // 		"Richmond",
// // 		"Southwark",
// // 		"Sutton",
// // 		"Walthamstow",
// // 		"Wandsworth",
// // 		"Westminster",
// // 	],
// // 	datasets: [
// // 		{
// // 			label: "Violent Crimes",
// // 			data: [
// // 				146, 146, 14, 21, 203, 34, 213, 322, 334, 126, 108, 112, 433, 309, 309,
// // 				125, 264, 21, 42, 64, 194, 322, 322, 79, 315, 278, 125, 146, 339, 63,
// // 				31, 299, 125, 148, 178, 507,
// // 			],
// // 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// // 			borderColor: "#1a1818",
// // 			borderWidth: 1,
// // 		},
// // 	],
// // };
// const dataNorthLondon = {
// 	labels: ["Barnet", "Enfield", "Haringey", "Walthamstow"],
// 	datasets: [
// 		{
// 			label: "Violent Crimes North London",
// 			data: [14, 108, 264, 148],
// 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };
// const dataSouthLondon = {
// 	labels: ["Bromley", "Croydon", "Sutton", "Merton", "Kingston", "Richmond"],
// 	datasets: [
// 		{
// 			label: "Violent Crimes South London",
// 			data: [34, 334, 125, 146, 79, 31],
// 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };
// const dataWestLondon = {
// 	labels: [
// 		"Hammersmith",
// 		"Fulham",
// 		"Hounslow",
// 		"Ealing",
// 		"Hillingdon",
// 		"Harrow",
// 		"Brent",
// 	],
// 	datasets: [
// 		{
// 			label: "Violent Crimes West London",
// 			data: [309, 309, 194, 126, 64, 21, 203],
// 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };
// const dataEastLondon = {
// 	labels: [
// 		"Redbridge",
// 		"Barking",
// 		"Dagenham",
// 		"Havering",
// 		"Hackney",
// 		"LimeHouse",
// 		"Newham",
// 		"Lewisham",
// 		"Greenwich",
// 		"Bexley",
// 	],
// 	datasets: [
// 		{
// 			label: "Violent Crimes East London",
// 			data: [63, 146, 42, 433, 125, 339, 278, 112, 21],
// 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };
// const dataCentralLondon = {
// 	labels: [
// 		"Camden",
// 		"Islington",
// 		"Westminster",
// 		"Kensington",
// 		"Chelsea",
// 		"Wandsworth",
// 		"Lambeth",
// 		"Southwark",
// 	],
// 	datasets: [
// 		{
// 			label: "Violent Crimes Central London",
// 			data: [213, 322, 507, 322, 322, 178, 315, 299],
// 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };

// function PieChart() {
// 	return (
// 		<>
// 			<div>
// 				<Bar data={dataNorthLondon} />
// 				<Bar data={dataSouthLondon} />
// 				<Bar data={dataWestLondon} />
// 				<Bar data={dataEastLondon} />
// 				<Bar data={dataCentralLondon} />
// 				{/* <Pie data={data} /> */}
// 			</div>
// 		</>
// 	);
// }

// export default PieChart;import React, { useState, useEffect } from "react";

// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from "chart.js";

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend
// );

// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import { Collapse, Button, Card, Alert } from "react-bootstrap";
// import { crimeData } from "../../data/CrimeData";
// import { neighbourhoodsData } from "../../data/neighbourhoodData";

// const CrimeDataComponent = () => {
// 	const [input, setInput] = useState("");
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [chartData, setChartData] = useState(null);
// 	const [open, setOpen] = useState(false);

// 	const findBoroughForNeighbourhood = (input) => {
// 		for (const neighbourhood in neighbourhoodsData) {
// 			if (neighbourhoodsData[neighbourhood].includes(input.toLowerCase())) {
// 				return neighbourhood;
// 			}
// 		}
// 		return null;
// 	};

// 	const prepareChartData = (borough) => {
// 		const index = crimeData.labels.findIndex(
// 			(label) => label.toLowerCase() === borough.toLowerCase()
// 		);
// 		if (index === -1) {
// 			console.error("No crime data found for this borough");
// 			return null;
// 		}

// 		return {
// 			labels: [crimeData.labels[index]],
// 			datasets: [
// 				{
// 					label: crimeData.datasets[0].label,
// 					data: [crimeData.datasets[0].data[index]],
// 					backgroundColor: crimeData.datasets[0].backgroundColor,
// 					borderColor: crimeData.datasets[0].borderColor,
// 					borderWidth: crimeData.datasets[0].borderWidth,
// 				},
// 			],
// 		};
// 	};

// 	useEffect(() => {
// 		if (input) {
// 			let borough = input.trim().toLowerCase();
// 			if (
// 				!crimeData.labels.map((label) => label.toLowerCase()).includes(borough)
// 			) {
// 				borough = findBoroughForNeighbourhood(borough);
// 			}

// 			if (borough) {
// 				const preparedData = prepareChartData(borough);
// 				if (preparedData) {
// 					setChartData(preparedData);
// 					setSearchTerm(input);
// 				} else {
// 					setChartData(null);
// 					setSearchTerm("");
// 				}
// 			}
// 		}
// 	}, [input]);

// 	return (
// 		<div className="container mt-3">
// 			<input
// 				type="text"
// 				value={input}
// 				onChange={(e) => setInput(e.target.value)}
// 				placeholder="Enter borough or neighbourhood"
// 				className="form-control"
// 			/>
// 			{searchTerm && (
// 				<div>
// 					<div className="feedback mt-3">
// 						You searched for: <strong>{searchTerm}</strong>
// 					</div>
// 					{chartData && (
// 						<>
// 							<Alert variant="info" className="mt-3">
// 								<Button
// 									onClick={() => setOpen(!open)}
// 									aria-controls="collapse-chart"
// 									aria-expanded={open}
// 								>
// 									More Crime Data
// 								</Button>
// 							</Alert>
// 							<Collapse in={open}>
// 								<div id="collapse-chart" className="mt-3">
// 									<Bar data={chartData} />
// 								</div>
// 							</Collapse>
// 						</>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default CrimeDataComponent;
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { Card } from "react-bootstrap";
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from "chart.js";
// import { crimeData } from "../../data/CrimeData";

// // Register the necessary chart.js components
// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend
// );

// const CrimeDataComponent = ({ searchTerm }) => {
// 	const [chartData, setChartData] = useState({
// 		labels: [],
// 		datasets: [],
// 	});

// 	useEffect(() => {
// 		// This example assumes crimeData is structured with keys like "North London", "South London", etc.
// 		// Adjust the logic here based on how your crimeData is structured and how it matches the searchTerm
// 		const area = searchTerm + " London";
// 		const data = crimeData[area];

// 		if (data) {
// 			setChartData({
// 				labels: data.labels,
// 				datasets: data.datasets,
// 			});
// 		}
// 	}, [searchTerm]);

// 	return (
// 		<Card>
// 			<Card.Body>
// 				{chartData.datasets.length > 0 && (
// 					<Bar
// 						data={chartData}
// 						options={{
// 							scales: {
// 								y: {
// 									beginAtZero: true,
// 								},
// 							},
// 							plugins: {
// 								legend: {
// 									display: true,
// 								},
// 								title: {
// 									display: true,
// 									text: "Violent Crimes in " + searchTerm,
// 								},
// 							},
// 						}}
// 					/>
// 				)}
// 			</Card.Body>
// 		</Card>
// 	);
// };

// export default CrimeDataComponent;
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { crimeData } from "../../data/CrimeData"; // Adjust the path as necessary

// const CrimeDataComponent = ({ searchTerm }) => {
// 	const [chartData, setChartData] = useState(null);

// 	useEffect(() => {
// 		// Convert searchTerm to match your data keys, like "North London"
// 		const areaKey = searchTerm + " London";
// 		const areaData = crimeData[areaKey];

// 		if (areaData) {
// 			setChartData({
// 				labels: areaData.labels,
// 				datasets: areaData.datasets.map((dataset) => ({
// 					...dataset,
// 					backgroundColor: dataset.backgroundColor.slice(
// 						0,
// 						areaData.labels.length
// 					), // Ensuring colors array matches number of labels
// 				})),
// 			});
// 		}
// 	}, [searchTerm]);

// 	return chartData ? (
// 		<div style={{ width: "600px", height: "400px" }}>
// 			<Bar
// 				data={chartData}
// 				options={{
// 					scales: {
// 						y: {
// 							beginAtZero: true,
// 						},
// 					},
// 					plugins: {
// 						legend: {
// 							display: true,
// 						},
// 						title: {
// 							display: true,
// 							text: `Violent Crimes in ${searchTerm} London`,
// 						},
// 					},
// 				}}
// 			/>
// 		</div>
// 	) : null;
// };

// export default CrimeDataComponent;

// import React from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar } from "react-chartjs-2";
// import { cardinalsCrimeData } from "../../data/CrimeData";

// const CrimeChart = () => {
// 	return (
// 		<div>
// 			<h2>Violent Crimes in London by Borough</h2>
// 			<Bar
// 				style={{ width: 200 }}
// 				data={cardinalsCrimeData}
// 				options={{
// 					scales: {
// 						y: {
// 							beginAtZero: true,
// 						},
// 					},
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default CrimeChart;

// const chartData = {
// 	labels: [
// 		"Barking",
// 		"Dagenham",
// 		"Barnet",
// 		"Bexley",
// 		"Brent",
// 		"Bromley",
// 		"Camden",
// 		"Chelsea",
// 		"Croydon",
// 		"Ealing",
// 		"Enfield",
// 		"Greenwich",
// 		"Havering",
// 		"Hammersmith",
// 		"Fulham",
// 		"Haringey",
// 		"Harrow",
// 		"Hillingdon",
// 		"Hounslow",
// 		"Islington",
// 		"Kensington",
// 		"Kingston",
// 		"Lambeth",
// 		"Lewisham",
// 		"Limehouse",
// 		"Merton",
// 		"Newham",
// 		"Redbridge",
// 		"Richmond",
// 		"Southwark",
// 		"Sutton",
// 		"Tower Hamlets",
// 		"Waltham Forest",
// 		"Wandsworth",
// 		"Westminster",
// 	],
// 	datasets: [
// 		{
// 			label: "Violent Crimes",
// 			data: [
// 				146, 146, 14, 21, 203, 34, 213, 322, 334, 126, 108, 112, 433, 309,
// 				309, 125, 264, 21, 42, 64, 194, 322, 322, 79, 315, 278, 125, 146, 339,
// 				63, 31, 299, 125, 148, 178, 507,
// 			],
// 			backgroundColor: [
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 				"#8d1414",
// 				"#a485b3",
// 				"#004c00",
// 				"#ffcba4",
// 				"#e1ec14",
// 			],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };

// CrimeChart.js

// import React from "react";
// import { Pie, Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// const CrimeChart = ({ data }) => {

// 	return (
// 		<>

// 			<Bar data={data} style={{ width: 700 }} />
// 		</>
// 	);
// };

// export default CrimeChart;

// import React from "react";
// import { Pie, Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// // Import your data from a separate module
// import {
// 	dataNorthLondon,
// 	dataSouthLondon,
// 	dataWestLondon,
// 	dataEastLondon,
// 	dataCentralLondon,
// } from "../../data/CrimeData"; // Ensure these paths match your project structure

// const CrimeChart = ({ data, type }) => {
// 	const aggregateData = () => {
// 		const labels = [
// 			"North London",
// 			"South London",
// 			"West London",
// 			"East London",
// 			"Central London",
// 		];
// 		const datasetData = [
// 			dataNorthLondon.datasets[0].data.reduce((a, b) => a + b, 0),
// 			dataSouthLondon.datasets[0].data.reduce((a, b) => a + b, 0),
// 			dataWestLondon.datasets[0].data.reduce((a, b) => a + b, 0),
// 			dataEastLondon.datasets[0].data.reduce((a, b) => a + b, 0),
// 			dataCentralLondon.datasets[0].data.reduce((a, b) => a + b, 0),
// 		];

// 		return {
// 			labels,
// 			datasets: [
// 				{
// 					label: "Violent Crimes",
// 					data: datasetData,
// 					backgroundColor: [
// 						"#4E79A7",
// 						"#F28E2B",
// 						"#E15759",
// 						"#76B7B2",
// 						"#59A14F",
// 					],
// 					borderColor: "#22201f",
// 					borderWidth: 1,
// 				},
// 			],
// 		};
// 	};

// 	if (type === "pie") {
// 		return <Pie data={data} />;
// 	} else if (type === "bar") {
// 		const aggregatedData = aggregateData();
// 		return <Bar data={aggregatedData} />;
// 	} else {
// 		return <div>Please specify a chart type.</div>;
// 	}
// };

// export default CrimeChart;

// import React from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// const CrimeChart = ({ data }) => {
// 	return (
// 		<div>
// 			<Bar
// 				data={data}
// 				options={{ responsive: true, maintainAspectRatio: true }}
// 			/>
// 			<Pie
// 				data={data}
// 				options={{ responsive: true, maintainAspectRatio: true }}
// 			/>
// 		</div>
// 	);
// };

// export default CrimeChart;

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Crime.styles.css";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function CrimeChart({ crimeData, searchTerm }) {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Chart.js Bar Chart",
			},
		},
	};

	const labels = Object.keys(crimeData);

	const data = {
		labels,
		datasets: [
			{
				label: "Crime Breakdown in the Area",
				data: Object.values(crimeData),
				backgroundColor: [
					"#4E79A7",
					"#F28E2B",
					"#E15759",
					"#76B7B2",
					"#59A14F",
					"#EDC948",
					"#B07AA1",
					"#FF9DA7",
					"#9C755F",
					"#BAB0AC",
					"#D37295",
					"#FABFD2",
					"#86BCB6",
					"#EAE584",
				],
			},
			// {
			//     label: 'Dataset 2',
			//     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			//     backgroundColor: 'rgba(53, 162, 235, 0.5)',
			// },
		],
	};

	return (
		<>
			<Bar options={options} data={data} />
		</>
	);
}
