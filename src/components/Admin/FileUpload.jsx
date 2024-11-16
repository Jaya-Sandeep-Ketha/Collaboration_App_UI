import React, { useState } from 'react';

function FileUpload() {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileUpload = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const handleUploadSubmit = (event) => {
    event.preventDefault();
    console.log('Uploaded File:', csvFile);
  };

  return (
    <div className="backdrop-blur-sm bg-white/2 shadow-xl rounded-lg p-6 border border-white/20">
      <h2 className="text-lg font-semibold text-white mb-4">Upload CSV File</h2>
      <form onSubmit={handleUploadSubmit} className="space-y-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 bg-opacity-80 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Upload File
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
