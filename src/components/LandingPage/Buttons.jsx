import React from 'react';

function Buttons({ onAdminClick, onUserClick, isAdminActive, isUserActive }) {
  // Define the style objects directly
  const activeStyle = { color: '#E70D41' }; // Dark pinkish-red color when active
  const inactiveStyle = { color: 'white' }; // Default white color

  return (
    <div className="flex space-x-4" style={{ paddingLeft: "5rem" }}>
      <button 
        style={isAdminActive ? activeStyle : inactiveStyle}
        className="px-6 py-2 border border-white rounded-md transition duration-300"
        onMouseOver={(e) => e.currentTarget.style.color = '#E70D41'}
        onMouseOut={(e) => e.currentTarget.style.color = isAdminActive ? '#E70D41' : 'white'}
        onClick={onAdminClick}
      >
        Admin
      </button>
      <button 
        style={isUserActive ? activeStyle : inactiveStyle}
        className="px-6 py-2 border border-white rounded-md transition duration-300"
        onMouseOver={(e) => e.currentTarget.style.color = '#E70D41'}
        onMouseOut={(e) => e.currentTarget.style.color = isUserActive ? '#E70D41' : 'white'}
        onClick={onUserClick}
      >
        User
      </button>
    </div>
  );
}

export default Buttons;
