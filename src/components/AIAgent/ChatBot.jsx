import React, { useState } from 'react';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Hardcoded data model
    const data = {
        projects: [
            {
                id: 1,
                name: 'Project X',
                employees: ['Alice', 'Bob'],
            },
            {
                id: 2,
                name: 'Project Y',
                employees: ['Charlie', 'Diana'],
            },
            {
                id: 3,
                name: 'Project Z',
                employees: ['Eve'],
            },
        ],
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        let botResponse = 'I didn’t understand your question. Please ask something like "Who is working on Project X?"';

        // Check if the input matches the pattern "Who is working on Project X?"
        const match = input.match(/who is working on (.+)\?/i);
        if (match) {
            const projectName = match[1].trim();
            const project = data.projects.find((p) => p.name.toLowerCase() === projectName.toLowerCase());

            if (project) {
                botResponse = `The following employees are working on ${project.name}: ${project.employees.join(', ')}.`;
            } else {
                botResponse = `I couldn't find any information about ${projectName}.`;
            }
        }

        const botMessage = { sender: 'bot', text: botResponse };
        setMessages((prev) => [...prev, botMessage]);
        setInput('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
                <div className="text-center text-lg font-semibold mb-4 text-gray-700">Employee Project ChatBot</div>

                {/* Chat Display */}
                <div className="h-72 overflow-y-scroll border border-gray-300 rounded-md p-3 mb-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                        >
                            <div
                                className={`px-4 py-2 rounded-lg max-w-xs ${
                                    msg.sender === 'user'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input and Send Button */}
                <div className="flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Ask something..."
                    />
                    <button
                        onClick={sendMessage}
                        className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
