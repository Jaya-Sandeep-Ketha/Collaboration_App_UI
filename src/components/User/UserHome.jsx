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
    githubRepo: 'github.com/janesmith/dashboard-app',
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
    githubRepo: 'github.com/janesmith/dashboard-app',
    details: {
      role: 'UI/UX Designer',
      experience: '3 years',
      skills: 'Figma, Adobe XD, CSS',
    },
  },
  {
    id: 3,
    name: 'Alice Johnson',
    contact: 'alice.johnson@example.com',
    project: '123',
    feature: 'Database Integration',
    githubRepo: 'github.com/alicejohnson/data-integration',
    details: {
      role: 'Database Administrator',
      experience: '8 years',
      skills: 'MySQL, PostgreSQL, Oracle',
    },
  },
  {
    id: 4,
    name: 'Bob Brown',
    contact: 'bob.brown@example.com',
    project: '125',
    feature: 'Authentication',
    githubRepo: 'github.com/bobbrown/new-auth',
    details: {
      role: 'Security Specialist',
      experience: '6 years',
      skills: 'OAuth, SAML, OpenID Connect',
    },
  },
  {
    id: 5,
    name: 'Carol White',
    contact: 'carol.white@example.com',
    project: '126',
    feature: 'Payment Gateway',
    githubRepo: 'github.com/carolwhite/payment-system',
    details: {
      role: 'Backend Developer',
      experience: '4 years',
      skills: 'Java, Spring Boot, Hibernate',
    },
  },
  {
    id: 6,
    name: 'Dave Martin',
    contact: 'dave.martin@example.com',
    project: '127',
    feature: 'User Management',
    githubRepo: 'github.com/davemartin/user-management',
    details: {
      role: 'Frontend Developer',
      experience: '2 years',
      skills: 'Angular, TypeScript, RxJS',
    },
  },
  {
    id: 7,
    name: 'Eva Green',
    contact: 'eva.green@example.com',
    project: '123',
    feature: 'API Development',
    githubRepo: 'github.com/evagreen/api-project',
    details: {
      role: 'API Developer',
      experience: '7 years',
      skills: 'Node.js, Express, Swagger',
    },
  },
  {
    id: 8,
    name: 'Frank Gray',
    contact: 'frank.gray@example.com',
    project: '128',
    feature: 'Mobile Integration',
    githubRepo: 'github.com/frankgray/mobile-integration',
    details: {
      role: 'Mobile Developer',
      experience: '5 years',
      skills: 'React Native, Swift, Kotlin',
    },
  },
];

function UserHome() {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (projectId, featureName, githubRepo) => {
    const results = employeesData.filter(employee => {
      const matchProjectId = projectId ? employee.project === projectId : true;
      const matchFeatureName = featureName ? employee.feature.toLowerCase().includes(featureName.toLowerCase()) : true;
      const matchGithubRepo = githubRepo ? (employee.githubRepo && employee.githubRepo.includes(githubRepo)) : true;
      return matchProjectId && matchFeatureName && matchGithubRepo;
    });
    setFilteredEmployees(results);
  };
  

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: `url(${userHomebg1})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="relative z-10 w-full max-w-5xl px-4 py-10">
        <SearchBar onSearch={handleSearch} />
        <EmployeeCards employees={filteredEmployees} />
      </div>
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
