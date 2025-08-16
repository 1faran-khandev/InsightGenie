import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartsSection = () => {
  
  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
  const barData = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 1700, 2200, 2000],
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500
      },
    ],
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "Users",
        data: [300, 450, 400, 600, 550],
        borderColor: "rgba(34, 197, 94, 0.9)", 
        backgroundColor: "rgba(34, 197, 94, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        label: "Region Sales",
        data: [300, 200, 150, 100],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(234, 179, 8, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(16, 185, 129, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Data Visualizations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
