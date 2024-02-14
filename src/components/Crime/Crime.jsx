import { useState, useEffect } from "react";
import { Alert, Button, Collapse } from "react-bootstrap";
import CrimeChart from "./CrimeChart";

function Crime({ crimeRate, crimeData, searchTerm }) {
	const [showChart, setshowChart] = useState(false);
	// const [searchTerm, setSearchTerm] = useState('');

	const [crimeSeverity, setCrimeSeverity] = useState(null);
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		console.log(crimeData);
		setshowChart(true);
	};

	const calculateSeverity = (crimeRate) => {
		if (!crimeRate) {
			// console.warn("Crime rate is missing.");
			return null;
		}

		let severity, color;

		if (crimeRate <= 75) {
			severity = "Low";
			color = "success";
		} else if (crimeRate > 75 && crimeRate <= 147) {
			severity = "Moderate";
			color = "warning";
		} else if (crimeRate > 147 && crimeRate <= 302) {
			severity = "Medium";
			color = "secondary";
		} else {
			severity = "High";
			color = "danger";
		}

		return { severity, color };
	};

	useEffect(() => {
		const result = calculateSeverity(crimeRate);
		setCrimeSeverity(result);
	}, [crimeRate]);

	return (
		<div>
			{/* <h1>Crime</h1>
			{crimeRate ? (
				<div>
					<p>Crime rate: {crimeRate}</p>
					<button onClick={handleClick}>More Crime Data</button>
					{crimeSeverity && (
						<Alert variant={crimeSeverity.color}>
							Crime Severity: {crimeSeverity.severity}
						</Alert>
					)}
				</div>
			) : null}
			{showChart ? <CrimeChart crimeData={crimeData} /> : null} */}
			{crimeRate && <h1>Crime Information</h1>}
			{crimeRate && crimeSeverity && (
				<Alert variant={crimeSeverity.color}>
					Crime Score: {crimeSeverity.severity}
					<br /> Crime Rate: {crimeRate}
				</Alert>
			)}
			{crimeRate && (
				<>
					<Button
						onClick={() => {
							setOpen(!open);
							setshowChart(true);
						}}
						aria-controls="collapse-text"
						aria-expanded={open}
					>
						{open ? "Hide Crime Data" : "More Crime Data"}
					</Button>

					<Collapse in={open}>
						<div className="card card-body collapse-horizontal ">
							{showChart ? (
								<CrimeChart crimeData={crimeData} searchTerm={searchTerm} />
							) : null}
						</div>
					</Collapse>
				</>
			)}
		</div>
	);
}

export default Crime;
