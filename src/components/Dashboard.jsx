import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FileUpload from "./FileUpload";
import DataSummary from "./DataSummary";
import InsightsCards from "./InsightsCards";
import ChartsSection from "./ChartsSection";
import ChatSidebar from "./ChatSidebar";
import Button from "./ui/Button";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </section>
);

export default function Dashboard() {
  const [data, setData] = useState([
    { month: "Jan", sales: 120 },
    { month: "Feb", sales: 150 },
    { month: "Mar", sales: 180 },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
  <div className="relative flex min-h-screen bg-gray-100 dark:bg-gray-900">
    {/* Main Content */}
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>

        <div className="flex gap-3">
          <Button
            onClick={() => setSidebarOpen((v) => !v)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {sidebarOpen ? "Close Chat" : "Open Chat"}
          </Button>
        </div>
      </div>

      <Section title="Upload Data">
        <FileUpload setData={setData} onError={(msg) => alert(msg)} />
      </Section>

      <Section title="Summary">
        <DataSummary data={data} />
      </Section>

      <Section title="Key Insights">
        <InsightsCards data={data} />
        <ChartsSection data={data} />
      </Section>
    </main>

    {/* Chat Sidebar */}
    <div className="w-full md:w-80 lg:w-96 bg-white shadow-lg p-4 md:sticky md:top-0 md:h-screen flex flex-col">
      <ChatSidebar />
    </div>
  </div>
)};