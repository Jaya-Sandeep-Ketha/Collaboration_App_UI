
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeCards({ employees }) {
  const navigate = useNavigate();

  const handleConnect = (employee) => {
    navigate(`/chat`, { state: { employee } });  // Pass employee data through state
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {employees.length > 0 ? (
        employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white/10 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden border border-white/20 transform transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative group">
              {/* Basic Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{employee.name}</h3>
                <p className="text-gray-300">{employee.contact}</p>
              </div>

              {/* Detailed Info (Initially Collapsed) */}
              <div
                className="max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden bg-black/60 p-4 flex flex-col justify-start"
              >
                <h4 className="text-white text-sm font-bold">Role:</h4>
                <p className="text-gray-300 mb-2">{employee.details.role}</p>
                <h4 className="text-white text-sm font-bold">Experience:</h4>
                <p className="text-gray-300 mb-2">{employee.details.experience}</p>
                <h4 className="text-white text-sm font-bold">Skills:</h4>
                <p className="text-gray-300">{employee.details.skills}</p>
              </div>
              
              {/* Connect Button */}
              <button
                onClick={() => handleConnect(employee)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 block mx-auto"
              >
                Connect
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-gray-300 text-center">
          No employees found. Try searching with different criteria.
        </p>
      )}
    </div>
  );
}

export default EmployeeCards;
