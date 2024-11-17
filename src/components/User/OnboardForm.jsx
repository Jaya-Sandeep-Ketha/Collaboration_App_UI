import React, { useState } from 'react';
import userHomebg1 from '../../assets/userHomebg1.jpg';

function OnboardForm() {
    const [formData, setFormData] = useState({
        Employee_firstName: '',
        Employee_lastName: '',
        Email: '',
        Chat_name: '',
        Location: '',
        Title: '',
        Reporting_to: '',
        Password: '',
        Company_code: '',
        Project_name: '',
        Github_repo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
            style={{ backgroundImage: `url(${userHomebg1})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
            <div className="relative z-10 w-full max-w-4xl px-4 py-10">
                <form className="backdrop-blur-sm bg-white/10 shadow-xl rounded-lg p-6 border border-white/20" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold text-white mb-6">Stay in Touch!!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {Object.keys(formData).map((key) => (
                            <input
                                key={key}
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                placeholder={`Enter ${key.replace(/_/g, ' ')}`}
                                className="block w-full text-white bg-transparent border border-white/30 rounded-lg p-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 bg-opacity-80 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OnboardForm;
