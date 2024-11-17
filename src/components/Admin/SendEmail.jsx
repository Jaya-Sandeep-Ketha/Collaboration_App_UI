import React, { useState } from 'react';
import axios from 'axios';

function SendEmail() {
  const [emailId, setEmailId] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const response = await axios.post(`${CORS_PROXY}https://touch.sandyjsk.xyz/api/admin/send-onboarding-email`, { email: emailId });
      
      console.log('Email sent:', response.data);
      setMessage('Email sent successfully!');
      setEmailId(''); // Clear the input field
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="backdrop-blur-sm bg-white/2 shadow-xl rounded-lg p-6 border border-white/20">
      <h2 className="text-lg font-semibold text-white mb-4">Send Email</h2>
      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div>
          <label htmlFor="email_id" className="block text-white mb-2">
            Email Id
          </label>
          <input
            type="email"
            id="email_id"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter Email Id"
            className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 bg-opacity-80 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Email
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default SendEmail;