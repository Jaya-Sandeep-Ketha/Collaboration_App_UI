import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import userHomebg1 from '../../assets/userHomebg1.jpg'; // Ensure correct path
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure the path is correct based on your directory structure

function Chat() {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state?.employee; // Fetching employee data from the navigation state
  const [message, setMessage] = useState('');
  
  const [messages, setMessages] = useState([
    { text: `Hi ${employee?.name}, could you provide an update on the Feature: 100279-authentication task?`, sender: "user" },
  { text: `Certainly! What specific details are you looking for regarding the 100279-authentication task?`, sender: employee?.name },
  { text: `I'm particularly interested in the current progress and whether there are any overlapping efforts that we should coordinate on.`, sender: "user" },
  { text: `We are approximately 75% complete. I'll send you the feature status file shortly, which outlines all the details and helps ensure we aren't duplicating efforts.`, sender: employee?.name }
  ]);

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage('');
    }
  };

  const endChat = () => {
    navigate(-1); // Navigate back to the previous screen
  };

  return (
    <div className="w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${userHomebg1})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Header with Employee Info and Call Buttons */}
        <div className="p-4 flex justify-between items-center bg-black/50 text-white">
          <div>
            <h2 className="text-lg font-bold">{employee?.name}</h2>
            <p>{employee?.contact}</p>
          </div>
          <div>
            <button className="text-white p-2 rounded-full hover:bg-gray-700">
              <i className="fas fa-phone-alt"></i> {/* Audio call icon */}
            </button>
            <button className="text-white p-2 rounded-full hover:bg-gray-700 ml-2">
              <i className="fas fa-video"></i> {/* Video call icon */}
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex flex-col space-y-4 p-4 overflow-auto flex-grow bg-black/30">
          {messages.map((msg, index) => (
            <div key={index} className={`p-3 rounded-md ${msg.sender === 'user' ? 'self-end bg-blue-300 text-black' : 'self-start bg-gray-300 text-black'}`}>
              <span>{msg.sender === 'user' ? 'You' : msg.sender}: {msg.text}</span>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 w-full flex bg-white">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a new message"
            className="flex-grow p-2 border-2 border-gray-300 rounded focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>

        {/* End Chat Button */}
        <div className="p-4">
          <button
            onClick={endChat}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded w-full hover:bg-red-600"
          >
            End Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
