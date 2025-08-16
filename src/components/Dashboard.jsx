import React from "react";
import FileUpload from "./FileUpload";
import DataSummary from "./DataSummary";
import InsightsCards from "./InsightsCards";
import ChartsSection from "./ChartsSection";
import ChatSidebar from "./ChatSidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <FileUpload />
        <DataSummary />
        <InsightsCards />
        <ChartsSection />
      </div>

      {/* Chat sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <ChatSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
 