import React, { useState } from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

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
            const response = await axios.post(`${CORS_PROXY}https://touch.sandyjsk.xyz/api/users/login`, loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            setResponseMessage(`Login successful: ${response.data.message}`);
            
            // Store token in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', loginData.email);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            
            // Show popup
            setShowPopup(true);
            
            // Redirect after 2 seconds
            setTimeout(() => {
                navigate('/user'); // Redirect to user homepage
            }, 2000);
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
            <div className="relative flex flex-col rounded-xl border border-gray-300 md:px-8 md:py-10 px-6 py-8 w-full max-w-3xl"
                 style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
                    backdropFilter: 'blur(10px)', // Frosted glass effect
                    WebkitBackdropFilter: 'blur(10px)', // Frosted glass effect for Safari
                    borderRadius: '15px', // Rounded corners
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow
                    border: '1px solid rgba(255, 255, 255, 0.3)' // Light border
                  }}>
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="text-center !text-2xl lg:text-3xl mb-4 text-white"
                >
                    Login
                </Typography>
                <div className="my-2 w-full max-w-4xl mx-auto h-0.5 bg-gray-400"></div>  {/* Adjusted the width and color */}
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 w-full">
                    {/* Email ID */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-slate-300">
                            Email ID
                        </label>
                        <Input
                            type="email"
                            id="email"
                            value={loginData.email}
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
                </form>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg">
                        <Typography variant="h4" color="blue-gray">
                            Login Successful
                        </Typography>
                        <Typography color="gray" className="mt-2">
                            Redirecting to homepage...
                        </Typography>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginForm;