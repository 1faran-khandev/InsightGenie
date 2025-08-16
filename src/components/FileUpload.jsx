import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Upload Dataset:</label>
      <input
        type="file"
        accept=".csv, .xlsx"
        onChange={handleFileChange}
        className="border border-gray-300 p-3 rounded w-full"
      />
      {file && <p className="mt-2 text-green-600">{file.name} selected</p>}
    </div>
  );
};

export default FileUpload;
