import React, { useState } from 'react';
import axios from 'axios';
import userHomebg1 from '../../assets/userHomebg1.jpg';

function OnboardForm() {
    const initialFormData = {
        employee_fname: '',
        employee_lname: '',
        email: '',
        chat_name: '',
        location: '',
        title: '',
        reports_to: '',
        password: '',
        company_code: '',
        project_name: '',
        github_repo_name: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting...');
        try {
            const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
            const response = await axios.post(`${CORS_PROXY}https://touch.sandyjsk.xyz/api/users/add`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('API response:', response.data);
            setSubmitStatus('Submission successful!');
            setFormData(initialFormData); // Reset form data
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('Submission failed. Please try again.');
        }
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
                                type={key === 'password' ? 'password' : 'text'}
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
                    {submitStatus && (
                        <p className="mt-4 text-white">{submitStatus}</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default OnboardForm;