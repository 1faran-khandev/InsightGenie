import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Activity, BarChart2, TrendingUp } from "lucide-react";

// Reusable StatCard component
const StatCard = ({ label, value, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
  >
    <Card
      aria-label={`${label}: ${value}`}
      className="shadow-sm rounded-2xl border border-gray-200 dark:border-gray-800 
                 hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 
                 dark:hover:from-gray-800 dark:hover:to-gray-700 transition duration-300"
    >
      <CardContent className="flex items-center gap-4 p-6">
        <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const DataSummary = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-6">
        No data available. Please upload a dataset.
      </p>
    );
  }

  // --- Calculations ---
  const totalRecords = data.length;

  // ✅ Unique Users (check for "user" or "UserID" field)
  const uniqueUsers = new Set(
    data.map((row) => row.user || row.UserID || row.id || "unknown")
  ).size;

  // ✅ Collect all numeric values
  const numericValues = [];
  data.forEach((row) => {
    Object.values(row).forEach((val) => {
      if (typeof val === "number" && !isNaN(val)) numericValues.push(val);
    });
  });

  // ✅ Average of numeric values
  const avgValue = numericValues.length
    ? Math.round(numericValues.reduce((a, b) => a + b, 0) / numericValues.length)
    : 0;

  // ✅ Growth rate (if dataset has time progression → first vs last numeric value)
  let growthRate = 0;
  if (numericValues.length >= 2) {
    const first = numericValues[0];
    const last = numericValues[numericValues.length - 1];
    growthRate = first !== 0 ? (((last - first) / first) * 100).toFixed(2) : 0;
  }

  // --- Stats config ---
  const stats = [
    { label: "Total Records", value: totalRecords, icon: Activity, color: "text-blue-600" },
    { label: "Unique Users", value: uniqueUsers, icon: Users, color: "text-purple-600" },
    { label: "Average Value", value: avgValue, icon: BarChart2, color: "text-orange-600" },
    { label: "Growth Rate", value: `${growthRate}%`, icon: TrendingUp, color: "text-green-600" },
  ];

  return (
    <section className="py-8">
      <motion.h2
        className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Data Summary
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default DataSummary;
