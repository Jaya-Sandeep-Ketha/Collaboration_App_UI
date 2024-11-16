import React from 'react'

function Buttons() {
    return (
    <div className="flex space-x-4">
      <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300">
        Admin
      </button>
      <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300">
        User
      </button>
    </div>
  );
}

export default Buttons