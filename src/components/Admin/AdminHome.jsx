// import React from 'react';
// import FileUpload from './FileUpload';
// import SendEmail from './SendEmail';
// import AdminHomebg from '../../assets/AdminHomebg.jpg';

// function HomeAdmin() {
//   return (
//     <div
//       className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
//       style={{ backgroundImage: `url(${AdminHomebg})` }}
//     >
//       {/* Background Overlays */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>

//       {/* Content Section */}
//       <div
//         className="relative w-full max-w-6xl px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 z-10"
//       >
//         <FileUpload />
//         <SendEmail />
//       </div>
//     </div>
//   );
// }

// export default HomeAdmin;


import React from "react";
import FileUpload from "./FileUpload";
import SendEmail from "./SendEmail";
import AdminHomebg from "../../assets/AdminHomebg.jpg";

function HomeAdmin() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: `url(${AdminHomebg})` }}
    >
      {/* Background Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Content Section */}
      <div className="relative w-full max-w-7xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 z-10 mt-20">
        {/* File Upload Section */}
        <FileUpload />

        {/* Email Sending Section */}
        <SendEmail />
      </div>
    </div>
  );
}

export default HomeAdmin;
