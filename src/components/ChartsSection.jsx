import React, { useRef, useEffect, useState } from "react";
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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow-md h-[350px] flex flex-col">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <div className="flex-1">{children}</div>
  </div>
);

const ChartsSection = ({ data }) => {
  const labels = data.map((item) => item.month);
  const sales = data.map((item) => item.sales);

  // Refs for canvas elements
  const barRef = useRef(null);
  const lineRef = useRef(null);

  // Gradient states
  const [barGradient, setBarGradient] = useState("rgba(59, 130, 246, 0.7)");
  const [lineGradient, setLineGradient] = useState("rgba(34, 197, 94, 0.3)");

  // Create gradients on mount
  useEffect(() => {
    if (barRef.current) {
      const ctx = barRef.current.ctx;
      const grad = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      grad.addColorStop(0, "rgba(59, 130, 246, 0.9)");
      grad.addColorStop(1, "rgba(59, 130, 246, 0.3)");
      setBarGradient(grad);
    }

    if (lineRef.current) {
      const ctx = lineRef.current.ctx;
      const grad = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      grad.addColorStop(0, "rgba(34, 197, 94, 0.7)");
      grad.addColorStop(1, "rgba(34, 197, 94, 0.2)");
      setLineGradient(grad);
    }
  }, []);

  const barData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: sales,
        backgroundColor: barGradient,
      },
    ],
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: "Sales Trend",
        data: sales,
        borderColor: "rgba(34, 197, 94, 0.9)",
        backgroundColor: lineGradient,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: "Sales Share",
        data: sales,
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(234, 179, 8, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(16, 185, 129, 0.7)",
        ],
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Data Visualizations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard title="Revenue Growth">
          <Bar ref={barRef} data={barData} options={options} />
        </ChartCard>
        <ChartCard title="Sales Trend">
          <Line ref={lineRef} data={lineData} options={options} />
        </ChartCard>
        <ChartCard title="Sales Distribution">
          <Pie data={pieData} options={options} />
        </ChartCard>
      </div>
    </div>
  );
};

export default ChartsSection;
