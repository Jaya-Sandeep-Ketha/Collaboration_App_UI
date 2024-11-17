
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import logo from "/src/assets/logo.jpg"; // Import your logo image

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  // Hardcoded employee data
  
  const employeeDetails = user
    ? {
        name: user.name || 'N/A',
        email: localStorage.getItem('email') || 'N/A',
        title: user.title || 'N/A',
        location: user.location || 'N/A',
      }
    : {
        name: 'Loading...',
        email: 'Loading...',
        title: 'Loading...',
        location: 'Loading...',
      };

  // Generate initials (e.g., JD for John Doe)
  const initials = `JD`;

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('companyCode');
    localStorage.removeItem('email');
    localStorage.removeItem('user');
    
    // You can also clear any other user-related data stored in localStorage
    // For example:
    // localStorage.removeItem('userData');

    // Close the menu
    setIsMenuOpen(false);

    // Navigate to the home page
    navigate('/');
  };

  return (
    <header className="bg-black relative z-50">
      <div className="flex items-center justify-between h-20 max-w-screen mx-auto px-4">
        {/* Logo Section */}
        <a href="#" className="block">
          <span className="sr-only">Home</span>
          <img src={logo} alt="Logo" className="h-16 w-auto ml-1" />
        </a>

        {/* Menu Icon Button */}
        <div className="relative">
          <button
            className="text-white flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {/* 3-line menu icon */}
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg text-white rounded-lg shadow-lg z-50">
              <div className="p-4">
                {/* Circular logo with initials */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 text-black font-bold text-xl">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{`${employeeDetails.name}`}</p>
                    <p className="text-gray-600">{employeeDetails.email}</p>
                  </div>
                </div>

                {/* Employee Details */}
                <p>
                  <span className="font-semibold">Title:</span> {employeeDetails.title}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {employeeDetails.location}
                </p>

                {/* Signout Button */}
                <button
                  onClick={handleSignOut}
                  className="mt-4 w-full px-4 py-2 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
