// src/components/InsightsCards.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  TrendingUp,
  Globe,
  ArrowDownCircle,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

// 🔹 Reusable Card
const InsightCard = ({ icon: Icon, label, value, color, index }) => (
  <motion.div custom={index} initial="hidden" animate="visible" variants={cardVariants}>
    <Card className="shadow-sm rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition duration-300">
      <CardContent className="flex items-center space-x-4 p-6 min-h-[110px]">
        <div className="flex-shrink-0">
          <Icon className={`w-10 h-10 ${color}`} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function InsightsCards({ data }) {
  // Example insights (you can expand later with real AI-driven insights)
  const insights = [
    {
      label: "Top-Selling Product",
      value: "Smartphone X",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      label: "Revenue Growth",
      value: "12% ↑",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      label: "Most Active Region",
      value: "North America",
      icon: Globe,
      color: "text-blue-600",
    },
    {
      label: "Customer Churn",
      value: "5% ↓",
      icon: ArrowDownCircle,
      color: "text-red-600",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 tracking-tight text-gray-900 dark:text-gray-100">
        Key Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} index={index} />
        ))}
      </div>
    </section>
  );
}
