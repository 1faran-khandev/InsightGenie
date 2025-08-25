// src/App.jsx
import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const HeroSection = React.lazy(() => import("./components/HeroSection"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));


// Loader with framer-motion
const Loader = () => (
  <motion.div
    className="flex items-center justify-center min-h-screen bg-background text-foreground"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </motion.div>
);

// Navbar
const Navbar = ({ theme, toggleTheme }) => (
  <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-md shadow z-50">
    <Link to="/" className="text-xl font-bold text-primary">InsightGenie</Link>
    <div className="flex items-center gap-6">
      <Link to="/" className="hover:text-primary transition">Home</Link>
      <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-muted hover:bg-accent transition"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  </nav>
);

// Page transition wrapper
const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="pt-20" // offset for navbar
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Suspense fallback={<Loader />}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </PageWrapper>
      </Suspense>
    </Router>
  );
}

export default App;
