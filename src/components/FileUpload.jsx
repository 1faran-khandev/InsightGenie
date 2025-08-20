import Papa from "papaparse";
import { useState } from "react";

const FileUpload = ({ setData }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        console.log(result.data);
        setData(result.data); // send parsed data to dashboard
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
