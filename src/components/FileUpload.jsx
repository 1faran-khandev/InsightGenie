import Papa from "papaparse";
import { useState } from "react";
import { Loader2, Upload } from "lucide-react";

const FileUpload = ({ setData, onError }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const parseFile = (file) => {
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      const msg = "Please upload a valid CSV file.";
      setErrorMsg(msg);
      onError?.(msg);
      return;
    }

    setLoading(true);
    setErrorMsg("");

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        setLoading(false);

        if (result.errors.length) {
          console.error("Parsing errors:", result.errors);
          const msg = "There was an issue parsing the file.";
          setErrorMsg(msg);
          onError?.(msg);
        } else {
          setData(result.data);
        }
      },
    });
  };

  const handleFileUpload = (e) => {
    parseFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      parseFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full">
      {/* Upload box */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDragActive(false);
        }}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 transition cursor-pointer 
        ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`}
      >
        {loading ? (
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-2" />
        ) : (
          <Upload className="w-8 h-8 text-blue-600 mb-2" />
        )}
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-blue-600 font-medium"
        >
          {loading ? "Parsing CSV..." : "Click or drag a CSV file here"}
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
          aria-label="Upload CSV file"
        />
      </div>

      {/* Error Message */}
      {errorMsg && (
        <p className="text-red-500 text-sm mt-2 text-center">{errorMsg}</p>
      )}
    </div>
  );
};

export default FileUpload;
