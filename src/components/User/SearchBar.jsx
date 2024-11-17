import React, { useState } from 'react';
import axios from 'axios';
import EmployeeCards from './EmployeeCards';

function SearchBar() {
  const [projectId, setProjectId] = useState('');
  const [featureName, setFeatureName] = useState('');
  const [githubRepo, setGithubRepo] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState('');

  const handleSearchClick = async () => {
    setError('');
    setSearchResults(null);

    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (!token) {
      setError('Authentication token not found. Please log in.');
      return;
    }

    try {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const response = await axios.post(
        `${CORS_PROXY}https://touch.sandyjsk.xyz/api/users/projectdetails`,
        {
          product_name: projectId || undefined,
          feature_name: featureName || undefined,
          github_repo_name: githubRepo || undefined
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setSearchResults(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while fetching data');
      console.error('Search error:', err);
    }
  };

  return (
    <div className="backdrop-blur-sm bg-white/10 shadow-xl rounded-lg p-6 border border-white/20">
      <h1 className="text-2xl font-bold text-white mb-6">Search Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Feature Name"
          value={featureName}
          onChange={(e) => setFeatureName(e.target.value)}
          className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter GitHub Repo"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
          className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 bg-opacity-80 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
      {searchResults && (
      <EmployeeCards 
        employees={searchResults}
      /> )}
      
    </div>
  );
}

export default SearchBar;