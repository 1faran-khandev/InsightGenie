import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";

function App() {
  // Optional: state to toggle between landing page and dashboard
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="App font-sans">
      {/* Landing Hero Section */}
      {!showDashboard && (
        <HeroSection />
      )}

      {/* Button to go to Dashboard (for demo) */}
      {!showDashboard && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setShowDashboard(true)}
          >
            Go to Dashboard
          </button>
        </div>
      )}

      {/* Dashboard */}
      {showDashboard && <Dashboard />}
    </div>
  );
}

export default App;
