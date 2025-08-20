import React from "react";
import { TrendingUp, TrendingDown, Globe, ShoppingCart } from "lucide-react";

const dummyInsights = [
  { title: "Top-Selling Product", value: "Smartphone X", icon: ShoppingCart, color: "text-blue-600" },
  { title: "Revenue Growth", value: "12% ↑ last month", icon: TrendingUp, color: "text-green-600" },
  { title: "Most Active Region", value: "North America", icon: Globe, color: "text-purple-600" },
  { title: "Customer Churn", value: "5% ↓", icon: TrendingDown, color: "text-red-600" },
];

const InsightsCards = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">AI Insights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyInsights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl hover:scale-105 transition transform flex flex-col justify-center items-center text-center min-h-[140px]"
            >
              {/* Icon */}
              <Icon className={`w-8 h-8 mb-3 ${insight.color}`} />

              {/* Title */}
              <p className="text-sm text-gray-500">{insight.title}</p>

              {/* Value */}
              <p className="text-lg font-bold mt-1">{insight.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsCards;
