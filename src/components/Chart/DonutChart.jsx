import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, Title, Legend, DoughnutController, ArcElement } from 'chart.js'; // Import necessary chart.js components

Chart.register(CategoryScale, LinearScale, Title, Legend, DoughnutController, ArcElement); // Register necessary scales and elements

function DonutChart({ chartData }) {
    return (
        <div>
            {/* Render the Doughnut chart component */}
            <Doughnut
                data={chartData} // Pass the chart data to the Doughnut component
                options={{
                    plugins: {
                        legend: {
                            display: true, // Display the legend
                            position: "bottom", // Position the legend at the bottom
                        },
                        title: {
                            display: true, // Display the title
                            text: "Crime Statistics", // Set the title text
                            fontSize: 20, // Set the title font size
                        },
                    },
                }}
            />
        </div>
    );
}

export default DonutChart;
