// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function EmployeeCards({ employees }) {
//   const navigate = useNavigate();

//   const handleConnect = (employee) => {
//     navigate(`/chat`, { state: { employee } });
//   };

//   // Check if employees and employees.data exist and are arrays
//   const employeeData = employees?.data?.[0]?.users || [];
//   console.log(employeeData);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      
//       {employeeData.length > 0 ? (
//         employeeData.map((employee) => (

//           <div
//             key={employee.employee_id}
//             className="bg-white/10 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden border border-white/20 transform transition-all duration-300 hover:shadow-2xl"
//           >
            
//             <div className="relative group">
//               {/* Basic Info */}
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-white">{`${employee.employee_fname} ${employee.employee_lname}`}</h3>
//                 <p className="text-gray-300">{employee.email}</p>
//               </div>

//               {/* Detailed Info (Initially Collapsed) */}
//               <div className="max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden bg-black/60 p-4 flex flex-col justify-start">
//                 <h4 className="text-white text-sm font-bold">Title:</h4>
//                 <p className="text-gray-300 mb-2">{employee.title}</p>
//                 <h4 className="text-white text-sm font-bold">Location:</h4>
//                 <p className="text-gray-300 mb-2">{employee.location}</p>
//                 <h4 className="text-white text-sm font-bold">Chat Name:</h4>
//                 <p className="text-gray-300">{employee.chat_name}</p>
//               </div>
              
//               {/* Connect Button */}
//               <button
//                 onClick={() => handleConnect(employee)}
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 block mx-auto"
//               >
//                 Connect
//               </button>
//             </div>
//           </div>
          

//         ))
//       ) : (
//         <p className="col-span-full text-gray-300 text-center">
//           No employees found. Try searching with different criteria.
//         </p>
//       )}
//     </div>
//   );
// }

// export default EmployeeCards;


import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeCards({ employees }) {
  const navigate = useNavigate();

  const handleConnect = (employee) => {
    navigate(`/chat`, { state: { employee } });
  };

  // Check if employees and employees.data exist and are arrays
  const employeeData = employees?.data?.[0]?.users || [];
  console.log(employeeData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {employeeData.length > 0 ? (
        employeeData.map((employee) => (
          <div
            key={employee.employee_id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-lg text-gray-800">
                    {`${employee.employee_fname[0]}${employee.employee_lname[0]}`} {/* Initials */}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-gray-900 truncate">{`${employee.employee_fname} ${employee.employee_lname}`}</h2>
                  <p className="text-sm text-gray-500 truncate">{employee.email}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm font-medium text-gray-900">Title : {employee.title}</div>
                <div className="text-sm text-gray-500">Location : {employee.location}</div>
                <div className="text-sm text-gray-500">Chat Name : {employee.chat_name}</div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleConnect(employee)}
                  className="w-full bg-blue-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          
        </p>
      )}
    </div>
  );
}

export default EmployeeCards;
