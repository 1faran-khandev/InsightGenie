import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInDown">
          InsightGenie
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
          Upload your datasets and get instant AI-powered insights & visualizations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeInUp delay-200">
          <button className="bg-neonBlue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg">
            Upload Data
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-lg transition shadow-lg">
            Try Demo
          </button>
        </div>

        {/* Optional illustration / hero image */}
        <div className="mt-12">
          <img
            src="/hero-illustration.svg" // Replace with your illustration
            alt="AI Data Insights"
            className="mx-auto w-full max-w-3xl animate-fadeInUp delay-400"
          />
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition">
            <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
            <p>Automatically generate insights from your uploaded datasets.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition">
            <h3 className="text-xl font-semibold mb-2">Data Visualizations</h3>
            <p>Charts and dashboards that help you understand trends quickly.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition">
            <h3 className="text-xl font-semibold mb-2">AI Chat</h3>
            <p>Ask questions about your data and get immediate answers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
