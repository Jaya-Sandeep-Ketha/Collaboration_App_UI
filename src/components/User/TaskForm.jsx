import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userHomebg1 from '../../assets/userHomebg1.jpg';

function TaskForm() {
  const [featureData, setFeatureData] = useState({
    featureName: '',
    featureDescription: '',
    projectId: '',
  });

  const [addedFeatures, setAddedFeatures] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeatureData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddFeature = () => {
    if (featureData.featureName && featureData.featureDescription && featureData.projectId) {
      setAddedFeatures((prevFeatures) => [...prevFeatures, featureData]);
      setFeatureData({ featureName: '', featureDescription: '', projectId: '' });
    } else {
      alert('Please fill in all fields before adding.');
    }
  };

  const handleRemoveFeature = (index) => {
    setAddedFeatures((prevFeatures) =>
      prevFeatures.filter((_, featureIndex) => featureIndex !== index)
    );
  };

  const handleSubmit = () => {
    alert('Features submitted successfully!');
    // Add submission logic here
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: `url(${userHomebg1})` }}
    >
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 py-10 backdrop-blur-sm bg-white/1 border border-white/20 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Feature Form</h1>

        {/* Feature Form */}
        <form className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              name="featureName"
              value={featureData.featureName}
              onChange={handleChange}
              placeholder="Enter Feature Name"
              className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              name="featureDescription"
              value={featureData.featureDescription}
              onChange={handleChange}
              placeholder="Enter Feature Description"
              className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <input
              type="text"
              name="projectId"
              value={featureData.projectId}
              onChange={handleChange}
              placeholder="Enter Project ID"
              className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={handleAddFeature}
            className="self-start bg-blue-500 bg-opacity-80 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Feature
          </button>
        </form>
      </div>

      {/* Display Added Features */}
      {addedFeatures.length > 0 && (
        <div className="relative z-10 w-full max-w-5xl px-4 py-10 mt-6">
          <h2 className="text-xl font-bold text-white mb-4">Added Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden border border-white/20 transform transition-all duration-300 hover:shadow-2xl relative"
              >
                <button
                  onClick={() => handleRemoveFeature(index)}
                  className="absolute top-2 right-2 bg-transparent text-white text-sm rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-100 hover:text-black transition"
                  >
                  &times;
                </button>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{feature.featureName}</h3>
                  <p className="text-gray-300">{feature.featureDescription}</p>
                  <p className="text-gray-300"><strong>Project ID:</strong> {feature.projectId}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        
      >
        Submit
      </button>
    </div>
  );
}

export default TaskForm;
