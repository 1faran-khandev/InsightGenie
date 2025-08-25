// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { BarChart3, Brain, MessageCircle } from "lucide-react";

const HeroSection = ({ scrollToDashboard }) => {
  const features = [
    {
      title: "AI Insights",
      desc: "Automatically generate insights from your uploaded datasets.",
      icon: Brain,
    },
    {
      title: "Data Visualizations",
      desc: "Charts and dashboards that help you understand trends quickly.",
      icon: BarChart3,
    },
    {
      title: "AI Chat",
      desc: "Ask questions about your data and get immediate answers.",
      icon: MessageCircle,
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-32 px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          id="hero-heading"
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          InsightGenie
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Upload your datasets and get instant AI-powered insights & visualizations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button
            onClick={scrollToDashboard}
            className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30"
          >
            Upload Data
          </Button>
          <Button
            onClick={scrollToDashboard}
            className="bg-transparent border border-white hover:border-blue-400 hover:bg-white/10 transition"
          >
            Try Demo
          </Button>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <img
            src="/hero-illustration.svg"
            alt="AI-driven dashboard with insights and charts"
            className="mx-auto w-full max-w-3xl"
            loading="lazy"
          />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 
                hover:scale-105 transition transform border border-white/20"
              >
                <Icon className="w-8 h-8 mb-3 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
