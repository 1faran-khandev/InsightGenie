import React, { useState } from "react";
import FileUpload from "./FileUpload";
import DataSummary from "./DataSummary";
import InsightsCards from "./InsightsCards";
import ChartsSection from "./ChartsSection";
import ChatSidebar from "./ChatSidebar";

const Dashboard = () => {
  const [data, setData] = useState([
    { month: "Jan", sales: 120 },
    { month: "Feb", sales: 150 },
    { month: "Mar", sales: 180 },
  ]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

        <div className="space-y-6">
          <FileUpload />
          <DataSummary data={data} />
          <InsightsCards data={data} />
          <ChartsSection data={data} />   {/* ✅ Pass data here */}
        </div>
      </div>

      {/* Chat Sidebar */}
      <div className="w-full md:w-80 lg:w-96 bg-white shadow-lg p-4 md:sticky md:top-0 md:h-screen flex flex-col">
        <ChatSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
