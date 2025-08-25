// src/components/ui/DataCard.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"; // using your shadcn card

const DataCard = ({ title, value, children }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100 tracking-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {value && (
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            {value}
          </p>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default DataCard;
