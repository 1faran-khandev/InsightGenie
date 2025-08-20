import React from "react";
import { Database, Table, AlertTriangle, Users } from "lucide-react"; // icons

const dummyStats = [
  { label: "Total Records", value: 1200, color: "bg-blue-600", icon: <Database size={28} /> },
  { label: "Columns", value: 8, color: "bg-green-600", icon: <Table size={28} /> },
  { label: "Missing Values", value: 24, color: "bg-yellow-600", icon: <AlertTriangle size={28} /> },
  { label: "Unique Users", value: 350, color: "bg-purple-600", icon: <Users size={28} /> },
];

// Reusable stat card
const StatCard = ({ label, value, color, icon }) => (
  <div
    className={`${color} text-white p-5 rounded-lg flex flex-col items-center justify-center shadow hover:scale-105 hover:shadow-lg transition-transform`}
    aria-label={`${label}: ${value}`}
  >
    <div className="mb-2">{icon}</div>
    <p className="text-sm opacity-80">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const DataSummary = () => {
  return (
    <div className="mb-6 bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Data Summary</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DataSummary;
