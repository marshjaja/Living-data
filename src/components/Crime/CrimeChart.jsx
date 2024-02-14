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
				text: "Crime Chart",
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
				borderColor: "#0c130b",
				borderWidth: 3,
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
