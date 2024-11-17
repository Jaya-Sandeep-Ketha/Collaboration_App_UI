import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function RegisterForm({ alreadyRegisteredForAdmin }) {
  const initialState = {
    admin_fname: "",
    admin_lname: "",
    emailId: "",
    password: "",
    company_name: "",
    location: "",
  };

  const [request, setRequestData] = useState(initialState);
  const [responseMessage, setResponseMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for the popup visibility
  const navigate = useNavigate(); // Use navigate hook for redirection

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRequestData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendRegisterData = async (requestData) => {
    try {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";  
      console.log(requestData);
      const response = await axios.post(`${CORS_PROXY}https://touch.sandyjsk.xyz/api/admin/register`, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.message);
      setResponseMessage(`Registration successful: ${response.data.message}`);
      
      // Show the popup after successful registration
      setShowPopup(true);

      // Clear the form fields after successful registration
      setRequestData(initialState);

      // Redirect to the login page after a short delay
      setTimeout(() => {
        alreadyRegisteredForAdmin()
    }, 2000); // 2-second delay for the popup

    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        setResponseMessage(`Error: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        setResponseMessage('No response received from server. Please try again.');
      } else {
        setResponseMessage(`Error: ${error.message}`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    sendRegisterData(request);
  };

  return (
    <div className="w-full flex items-center justify-center mr-20 ml-20 mb-20">
      <div className="relative flex flex-col rounded-xl border border-gray-300 md:px-8 md:py-10 px-6 py-8 w-full max-w-4xl">
        <Typography
          variant="h1"
          color="blue-gray"
          className="text-center !text-2xl lg:text-3xl mb-4 text-white"
        >
          Register
        </Typography>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="admin_fname" className="block mb-2 text-sm text-slate-300">
                First Name
              </label>
              <Input
                type="text"
                id="admin_fname"
                value={request.admin_fname}
                placeholder="Your First Name"
                size="lg"
                color="gray"
                className="placeholder:text-slate-400 p-2 text-white"
                onChange={handleChange}
              />
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="admin_lname" className="block mb-2 text-sm text-slate-300">
                Last Name
              </label>
              <Input
                type="text"
                id="admin_lname"
                value={request.admin_lname}
                placeholder="Your Last Name"
                size="lg"
                color="gray"
                className="placeholder:text-slate-400 p-2 text-white"
                onChange={handleChange}
              />
            </div>
            {/* Email ID */}
            <div>
              <label htmlFor="emailId" className="block mb-2 text-sm text-slate-300">
                Email ID
              </label>
              <Input
                type="email"
                id="emailId"
                value={request.emailId}
                placeholder="Your Email ID"
                size="lg"
                color="gray"
                className="placeholder:text-slate-400 p-2 text-white"
                onChange={handleChange}
              />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm text-slate-300">
                Password
              </label>
              <Input
                type="password"
                id="password"
                value={request.password}
                placeholder="Your Password"
                size="lg"
                color="gray"
                className="placeholder:text-slate-400 p-2 text-white"
                onChange={handleChange}
              />
            </div>
            {/* Company Name */}
            <div>
              <label htmlFor="company_name" className="block mb-2 text-sm text-slate-300">
                Company Name
              </label>
              <Input
                type="text"
                id="company_name"
                value={request.company_name}
                placeholder="Your Company Name"
                size="lg"
                color="gray"
                className="placeholder:text-slate-400 p-2 text-white"
                onChange={handleChange}
              />
            </div>
            {/* Location */}
            <div>
              <label htmlFor="location" className="block mb-2 text-sm text-slate-300">
                Location
              </label>
              <Input
                type="text"
                id="location"
                value={request.location}
                placeholder="Your Location"
                size="lg"
                color="gray"
                className="placeholder:text-slate-400 p-2 text-white"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <Typography variant="small" color="white" className="mt-2 text-center">
              {responseMessage}
            </Typography>
          )}

          {/* Buttons */}
          <Button type="submit" color="gray" fullWidth size="lg" className="mt-4 p-2">
            Sign Up
          </Button>

          <Button
            color="gray"
            fullWidth
            size="lg"
            className="mt-4 p-2"
            onClick={alreadyRegisteredForAdmin}
          >
            Already registered? Log in
          </Button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Typography variant="h6" className="text-center text-gray-800">
              Registration Successful!
            </Typography>
            <Typography className="mt-2 text-center text-gray-600">
              You will be redirected to the login page.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;