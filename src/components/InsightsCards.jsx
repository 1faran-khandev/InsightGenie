import React from "react";

const dummyInsights = [
  { title: "Top-Selling Product", value: "Smartphone X" },
  { title: "Revenue Growth", value: "12% ↑ last month" },
  { title: "Most Active Region", value: "North America" },
  { title: "Customer Churn", value: "5% ↓" },
];

const InsightsCards = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">AI Insights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyInsights.map((insight, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition flex flex-col justify-center items-center text-center"
          >
            <p className="text-sm text-gray-500 mb-2">{insight.title}</p>
            <p className="text-lg font-bold">{insight.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsCards;
