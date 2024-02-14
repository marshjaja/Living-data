import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js'; // Import necessary chart.js components

Chart.register(CategoryScale, LinearScale, BarElement, Title, Legend); // Register necessary scales and elements

function BarChart({ chartData }) {
    return (
        <div>
            {/* Render the Bar chart component */}
            <Bar
                data={chartData} // Pass the chart data to the Bar component
                options={{
                    scales: {
                        x: {
                            type: 'category', // Define x-axis as category scale
                            ticks: {
                                autoSkip: false, // Prevent auto-skipping of labels
                                maxRotation: 90, // Rotate x-axis labels for better visibility
                                minRotation: 45,
                            },
                        },
                        y: {
                            beginAtZero: true, // Start y-axis from zero
                        },
                    },
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

export default BarChart;
