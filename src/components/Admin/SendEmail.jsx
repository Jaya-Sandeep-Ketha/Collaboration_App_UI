import React, { useState } from 'react';

function SendEmail() {
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log('Email Subject:', emailSubject);
    console.log('Email Body:', emailBody);
  };

  return (
    <div className="backdrop-blur-sm bg-white/2 shadow-xl rounded-lg p-6 border border-white/20">
      <h2 className="text-lg font-semibold text-white mb-4">Send Emails</h2>
      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div>
          <label htmlFor="email_subject" className="block text-white mb-2">
            Email Subject
          </label>
          <input
            type="text"
            id="email_subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            placeholder="Enter Subject"
            className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email_body" className="block text-white mb-2">
            Email Body
          </label>
          <textarea
            id="email_body"
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            rows="4"
            placeholder="Enter email content"
            className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
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
