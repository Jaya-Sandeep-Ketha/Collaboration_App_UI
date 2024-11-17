import React, { useState } from 'react';

function SendEmail() {
  const [emailId, setEmailSubject] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log('Email Subject:', emailId);
  };

  return (
    <div className="backdrop-blur-sm bg-white/2 shadow-xl rounded-lg p-6 border border-white/20">
      <h2 className="text-lg font-semibold text-white mb-4">Send Email</h2>
      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div>
          <label htmlFor="email_subject" className="block text-white mb-2">
            Email Id
          </label>
          <input
            type="text"
            id="email_id"
            value={emailId}
            onChange={(e) => setEmailSubject(e.target.value)}
            placeholder="Enter Email Id"
            className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 bg-opacity-80 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Emails
        </button>
      </form>
    </div>
  );
}

export default SendEmail;
