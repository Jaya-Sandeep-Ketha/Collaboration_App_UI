import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [projectId, setProjectId] = useState('');
  const [featureName, setFeatureName] = useState('');
  const [githubRepo, setGithubRepo] = useState('');

  const handleSearchClick = () => {
    onSearch(projectId, featureName, githubRepo);
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
    </div>
  );
}

export default SearchBar;
