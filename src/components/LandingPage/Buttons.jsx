import React from 'react'
import { useState } from 'react';
import RegisterForm from './RegisterForm';
function Buttons({onAdminClick, onUserClick}) {

    return (
      <div className="flex space-x-4" style={{ paddingLeft: "5rem" }}>
      <button 
      className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300"
      onClick={onAdminClick}>
        Admin
      </button>
      <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300"
      onClick={onUserClick}>
        User
      </button>
    </div>
  );
}

export default Buttons