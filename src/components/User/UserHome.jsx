import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import EmployeeCards from './EmployeeCards';
import userHomebg1 from '../../assets/userHomebg1.jpg';

const employeesData = [
  {
    id: 1,
    name: 'John Doe',
    contact: 'john.doe@example.com',
    project: '123',
    feature: 'Authentication',
    details: {
      role: 'Software Engineer',
      experience: '5 years',
      skills: 'React, Node.js, TailwindCSS',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    contact: 'jane.smith@example.com',
    project: '124',
    feature: 'Dashboard',
    details: {
      role: 'UI/UX Designer',
      experience: '3 years',
      skills: 'Figma, Adobe XD, CSS',
    },
  },
  // Add more employee objects here
];

function UserHome() {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (projectId, featureName) => {
    const results = employeesData.filter(
      (employee) =>
        employee.project === projectId &&
        employee.feature.toLowerCase().includes(featureName.toLowerCase())
    );
    setFilteredEmployees(results);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: `url(${userHomebg1})` }}
    >
      {/* Background Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 py-10">
        <SearchBar onSearch={handleSearch} />
        <EmployeeCards employees={filteredEmployees} />
      </div>

      {/* Weekly Update Button */}
      <button
        onClick={() => navigate('/user/taskform')}
        className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Weekly Update
      </button>
    </div>
  );
}

export default UserHome;
