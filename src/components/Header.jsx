import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link for navigation
import logo from "/src/assets/logo.jpg"; // Import your logo image
import { Typography } from "@material-tailwind/react"; // Tailwind Typography component

function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const navigate = useNavigate(); // Initialize useNavigate hook
 const userString = localStorage.getItem("user");
 const user = JSON.parse(userString);

 // Employee Details
 const employeeDetails = user
   ? {
       name: user.name || "N/A",
       email: localStorage.getItem("email") || "N/A",
       title: user.title || "N/A",
       location: user.location || "N/A",
     }
   : {
       name: "Loading...",
       email: "Loading...",
       title: "Loading...",
       location: "Loading...",
     };

 // Function to generate user initials
 function getInitials(name) {
   const nameParts = name.split(" ");
   if (nameParts.length > 1) {
     return `${nameParts[0][0]}${nameParts[1][0]}`;
   } else if (nameParts.length === 1) {
     return nameParts[0][0]; // Return the first letter of the only word if there's only one word
   }
   return ""; // Return an empty string if there's no name
 }

 const initials = userString === null ? "AD" : getInitials(user.name);

 // Handle sign out
 const handleSignOut = () => {
   localStorage.removeItem("token");
   localStorage.removeItem("companyCode");
   localStorage.removeItem("email");
   localStorage.removeItem("user");

   // Close the menu
   setIsMenuOpen(false);

   // Navigate to the home page
   navigate("/");
 };

 return (
   <header className="bg-black relative z-50">
     <div className="flex items-center justify-between h-20 max-w-screen mx-auto px-4">
       {/* Logo Section */}
       <a href="#" className="block">
         <span className="sr-only">Home</span>
         <img src={logo} alt="Logo" className="h-16 w-auto ml-1" />
       </a>

       {/* Documentation Link and Menu Icon */}
       <div className="flex items-center space-x-6">
         {/* Documentation Link */}
         <Link to="/documentation">
           <Typography
             as="a"
             color="white"
             className="text-white text-lg font-semibold hover:text-blue-500"
           >
             Documentation
           </Typography>
         </Link>

         {/* Menu Icon */}
         <button
           className="text-white flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-800 transition"
           onClick={() => setIsMenuOpen((prev) => !prev)}
         >
           {/* 3-line menu icon */}
           <svg
             className="h-8 w-8"
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
       </div>

       {/* Dropdown Menu */}
       {isMenuOpen && (
         <div
           className="absolute right-0 mt-2 w-64 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg text-white rounded-lg shadow-lg z-50"
           style={{
             position: "absolute",
             right: "0",
             top: "100%",
             width: "256px", // Equivalent to w-64 in TailwindCSS
             backgroundColor: "rgba(255, 255, 255, 0.1)",
             backdropFilter: "blur(10px)",
             WebkitBackdropFilter: "blur(10px)", // For Safari
             borderRadius: "8px",
             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
             zIndex: 50,
             overflowY: "auto", // Adds vertical scrolling
             maxHeight: "90vh", // Maximum height before scrolling
             marginRight: "10px",
           }}
         >
           <div className="p-4">
             {/* Circular logo with initials */}
             <div className="flex items-center space-x-3 mb-4">
               <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 text-black font-bold text-xl">
                 {`${initials[0]}${initials[1]}`}
               </div>
               <div>
                 <p className="font-semibold text-lg">{`${employeeDetails.name}`}</p>
                 <p className="text-gray-600">{employeeDetails.email}</p>
               </div>
             </div>

             {/* Employee Details */}
             <p>
               <span className="font-semibold">Title:</span>{" "}
               {employeeDetails.title}
             </p>
             <p>
               <span className="font-semibold">Location:</span>{" "}
               {employeeDetails.location}
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
   </header>
 );
}

export default Header;