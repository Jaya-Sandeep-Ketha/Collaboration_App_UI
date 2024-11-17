import React, { useState } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AlreadyRegisteredAdmin({ notYetRegisteredAdmin }) {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        emailId: '',
        password: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
            const response = await axios.post(`${CORS_PROXY}https://touch.sandyjsk.xyz/api/admin/login`, loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);

            // Store token and company code in local storage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('companyCode', response.data.company_code);
            localStorage.setItem('email',loginData.emailId);

            setResponseMessage(`Login successful! Welcome, ${response.data.name}`);

            // You can redirect the user or update the app state here
            navigate('/admin');
        } catch (error) {
            console.error('Login error:', error);
            if (error.response) {
                setResponseMessage(`Error: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                setResponseMessage('No response received from server. Please try again.');
            } else {
                setResponseMessage(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="w-full flex items-center justify-start mr-10 ml-20 mb-20">
            <div className="relative flex flex-col rounded-xl border border-gray-300 md:px-8 md:py-10 px-6 py-8 w-full max-w-3xl">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="text-center !text-2xl lg:text-3xl mb-4 text-white"
                >
                    Admin Login
                </Typography>
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 w-full">
                    {/* Email ID */}
                    <div>
                        <label htmlFor="emailId" className="block mb-2 text-sm text-slate-300">
                            Email ID
                        </label>
                        <Input
                            type="email"
                            id="emailId"
                            value={loginData.emailId}
                            onChange={handleChange}
                            placeholder="Your Email ID"
                            size="lg"
                            color="gray"
                            className="placeholder:text-slate-400 p-2 text-white"
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
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder="Your Password"
                            size="lg"
                            color="gray"
                            className="placeholder:text-slate-400 p-2 text-white"
                        />
                    </div>

                    {/* Response Message */}
                    {responseMessage && (
                        <Typography variant="small" color="white" className="mt-2 text-center">
                            {responseMessage}
                        </Typography>
                    )}

                    {/* Login Button */}
                    <Button type="submit" color="gray" fullWidth size="lg" className="mt-4 p-2">
                        Login
                    </Button>
                    <Button 
                        color="gray" 
                        fullWidth 
                        size="lg" 
                        className="mt-4 p-2"
                        onClick={notYetRegisteredAdmin}
                    >
                        Not yet registered ? Register
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default AlreadyRegisteredAdmin;