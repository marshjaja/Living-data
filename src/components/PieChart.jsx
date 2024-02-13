import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// const data = {
// 	labels: [
// 		"Dagenham",
// 		"Barking",
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
// 		"Hackney",
// 		"Hammersmith",
// 		"Fulham",
// 		"Hamlets",
// 		"Haringey",
// 		"Harrow",
// 		"Havering",
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
// 		"Walthamstow",
// 		"Wandsworth",
// 		"Westminster",
// 	],
// 	datasets: [
// 		{
// 			label: "Violent Crimes",
// 			data: [
// 				146, 146, 14, 21, 203, 34, 213, 322, 334, 126, 108, 112, 433, 309, 309,
// 				125, 264, 21, 42, 64, 194, 322, 322, 79, 315, 278, 125, 146, 339, 63,
// 				31, 299, 125, 148, 178, 507,
// 			],
// 			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
// 			borderColor: "#1a1818",
// 			borderWidth: 1,
// 		},
// 	],
// };
const dataNorthLondon = {
	labels: ["Barnet", "Enfield", "Haringey", "Walthamstow"],
	datasets: [
		{
			label: "Violent Crimes North London",
			data: [14, 108, 264, 148],
			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
			borderColor: "#1a1818",
			borderWidth: 1,
		},
	],
};
const dataSouthLondon = {
	labels: ["Bromley", "Croydon", "Sutton", "Merton", "Kingston", "Richmond"],
	datasets: [
		{
			label: "Violent Crimes South London",
			data: [34, 334, 125, 146, 79, 31],
			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
			borderColor: "#1a1818",
			borderWidth: 1,
		},
	],
};
const dataWestLondon = {
	labels: [
		"Hammersmith",
		"Fulham",
		"Hounslow",
		"Ealing",
		"Hillingdon",
		"Harrow",
		"Brent",
	],
	datasets: [
		{
			label: "Violent Crimes West London",
			data: [309, 309, 194, 126, 64, 21, 203],
			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
			borderColor: "#1a1818",
			borderWidth: 1,
		},
	],
};
const dataEastLondon = {
	labels: [
		"Redbridge",
		"Barking",
		"Dagenham",
		"Havering",
		"Hackney",
		"LimeHouse",
		"Newham",
		"Lewisham",
		"Greenwich",
		"Bexley",
	],
	datasets: [
		{
			label: "Violent Crimes East London",
			data: [63, 146, 42, 433, 125, 339, 278, 112, 21],
			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
			borderColor: "#1a1818",
			borderWidth: 1,
		},
	],
};
const dataCentralLondon = {
	labels: [
		"Camden",
		"Islington",
		"Westminster",
		"Kensington",
		"Chelsea",
		"Wandsworth",
		"Lambeth",
		"Southwark",
	],
	datasets: [
		{
			label: "Violent Crimes Central London",
			data: [213, 322, 507, 322, 322, 178, 315, 299],
			backgroundColor: ["#8d1414", "#a485b3", "#004c00", "#ffcba4", "#e1ec14"],
			borderColor: "#1a1818",
			borderWidth: 1,
		},
	],
};

function PieChart() {
	return (
		<>
			<div>
				<Bar data={dataNorthLondon} />
				<Bar data={dataSouthLondon} />
				<Bar data={dataWestLondon} />
				<Bar data={dataEastLondon} />
				<Bar data={dataCentralLondon} />
				{/* <Pie data={data} /> */}
			</div>
		</>
	);
}

export default PieChart;
