import React from "react";

const dummyStats = [
  { label: "Total Records", value: 1200 },
  { label: "Columns", value: 8 },
  { label: "Missing Values", value: 24 },
  { label: "Unique Users", value: 350 },
];

const DataSummary = () => {
  return (
    <div className="mb-6 bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Data Summary</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyStats.map((stat, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-lg transition"
          >
            <p className="text-sm">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSummary;
