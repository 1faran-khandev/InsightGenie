import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ErrorBoundary = ({ children }) => {
  return (
    <React.StrictMode>
      {children}
    </React.StrictMode>
  );
};

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
