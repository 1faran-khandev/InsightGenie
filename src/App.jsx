// src/App.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";
import Button from "./components/ui/Button";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="App font-sans min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        {!showDashboard ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection />

            {/* Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <Button onClick={() => setShowDashboard(true)}>
                Go to Dashboard
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-gray-700 hover:bg-gray-800"
              >
                Scroll to Top
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Dashboard />

            {/* Back to Landing */}
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setShowDashboard(false)}
                className="bg-gray-700 hover:bg-gray-800"
              >
                Back to Landing
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
