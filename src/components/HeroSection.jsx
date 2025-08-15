import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInDown">
          InsightGenie
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
          Upload your datasets and get instant AI-powered insights & visualizations.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeInUp delay-200">
          <button className="bg-neonBlue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
            Upload Data
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-lg transition">
            Try Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
