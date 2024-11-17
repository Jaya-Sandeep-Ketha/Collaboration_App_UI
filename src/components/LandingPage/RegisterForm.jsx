import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';

function RegisterForm({alreadyRegisteredForAdmin}) {
    
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
                <form className="mt-4 flex flex-col gap-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block mb-2 text-sm text-slate-300"
                            >
                                First Name
                            </label>
                            <Input
                                type="text"
                                id="firstName"
                                placeholder="Your First Name"
                                size="lg"
                                color="gray"
                                className="placeholder:text-slate-400 p-2 text-white"
                            />
                        </div>
                        {/* Last Name */}
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block mb-2 text-sm text-slate-300"
                            >
                                Last Name
                            </label>
                            <Input
                                type="text"
                                id="lastName"
                                placeholder="Your Last Name"
                                size="lg"
                                color="gray"
                                className="placeholder:text-slate-400 p-2 text-white"
                            />
                        </div>
                        {/* Email ID */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm text-slate-300"
                            >
                                Email ID
                            </label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Your Email ID"
                                size="lg"
                                color="gray"
                                className="placeholder:text-slate-400 p-2 text-white"
                            />
                        </div>
                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm text-slate-300"
                            >
                                Password
                            </label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Your Password"
                                size="lg"
                                color="gray"
                                className="placeholder:text-slate-400 p-2 text-white"
                            />
                        </div>
                        {/* Company Name */}
                        <div>
                            <label
                                htmlFor="companyName"
                                className="block mb-2 text-sm text-slate-300"
                            >
                                Company Name
                            </label>
                            <Input
                                type="text"
                                id="companyName"
                                placeholder="Your Company Name"
                                size="lg"
                                color="gray"
                                className="placeholder:text-slate-400 p-2 text-white"
                            />
                        </div>
                        {/* Location */}
                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-2 text-sm text-slate-300"
                            >
                                Location
                            </label>
                            <Input
                                type="text"
                                id="location"
                                placeholder="Your Location"
                                size="lg"
                                color="gray"
                                className="placeholder:text-slate-400 p-2 text-white"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <Button color="gray" fullWidth size="lg" className="mt-4 p-2">
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
        </div>
    );
}

export default RegisterForm;
