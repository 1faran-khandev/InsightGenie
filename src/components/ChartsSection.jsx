// src/components/ChartsSection.jsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const CHART_COLORS = {
  line: "#6366F1",
  bar: "#10B981",
  pie: ["#6366F1", "#10B981", "#F59E0B", "#EF4444"],
};

export default function ChartsSection({
  lineData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 50 },
    { month: "Mar", value: 40 },
    { month: "Apr", value: 70 },
    { month: "May", value: 60 },
    { month: "Jun", value: 90 },
  ],
  barData = [
    { category: "A", count: 40 },
    { category: "B", count: 55 },
    { category: "C", count: 30 },
    { category: "D", count: 70 },
  ],
  pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ],
}) {
  return (
    <section className="mt-12">
      {/* Section Header */}
      <h2 className="text-2xl font-bold mb-6 tracking-tight text-gray-900 dark:text-gray-100">
        Data Visualizations
      </h2>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <Card className="flex-1 shadow-md rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col">
            <CardHeader>
              <CardTitle> Monthly Trends</CardTitle>
              <CardDescription>
                Performance over the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={CHART_COLORS.line}
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex"
        >
          <Card className="flex-1 shadow-md rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col">
            <CardHeader>
              <CardTitle> Category Distribution</CardTitle>
              <CardDescription>
                Comparison across categories
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill={CHART_COLORS.bar} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex"
        >
          <Card className="flex-1 shadow-md rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col">
            <CardHeader>
              <CardTitle> Segment Share</CardTitle>
              <CardDescription>
                Relative contribution of groups
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={CHART_COLORS.pie[index % CHART_COLORS.pie.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
