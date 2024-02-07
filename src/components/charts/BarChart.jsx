

import { Bar } from "react-chartjs-2";
import { LinearScale } from 'chart.js/auto'; 

function BarChart({ chartData }) {
  return (
    <div>
      <h2>User Gain/Loss Over the Years</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              type: 'linear', 
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;

