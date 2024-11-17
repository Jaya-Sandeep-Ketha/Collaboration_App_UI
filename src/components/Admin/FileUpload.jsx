import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [csvFile, setCsvFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileUpload = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const handleUploadSubmit = async (event) => {
    event.preventDefault();
    if (!csvFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const token = localStorage.getItem('token'); 
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const response = await axios.post(`${CORS_PROXY}https://touch.sandyjsk.xyz/api/admin/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        }
      });

      console.log('Upload response:', response.data);
      setUploadStatus('File uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="backdrop-blur-sm bg-white/2 shadow-xl rounded-lg p-6 border border-white/20">
      <h2 className="text-lg font-semibold text-white mb-4">Upload CSV File</h2>
      <form onSubmit={handleUploadSubmit} className="space-y-4">
        <label htmlFor="csv_file" className="block text-white">
          CSV file
        </label>
        <input
          id="csv_file"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 bg-opacity-80 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Upload File
        </button>
      </form>
      {uploadStatus && (
        <p className={`mt-4 text-center ${uploadStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
}

export default FileUpload;