import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';

function RegisterForm() {
    return (
        <div className="w-full flex items-center justify-start mr-20 ml-20 mb-20"> {/* Reduced ml-20 to ml-10 */}
            {/* Adjusted margin-left (ml-10) */}
            <div className="relative flex flex-col rounded-xl border border-gray-300 md:px-8 md:py-10 px-6 py-8 w-full max-w-3xl">
                {/* Adjusted padding and max-w-3xl for wider form */}
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="text-center !text-2xl lg:text-3xl mb-4 text-white"
                >
                    Register
                </Typography>
                <form className="mt-4 flex flex-col gap-4 w-full">
                    {/* Username */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm text-slate-300"
                        >
                            Username
                        </label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Your Username"
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

                    {/* Employee ID */}
                    <div>
                        <label
                            htmlFor="empID"
                            className="block mb-2 text-sm text-slate-300"
                        >
                            Employee ID
                        </label>
                        <Input
                            type="text"
                            id="empID"
                            placeholder="Your Employee ID"
                            size="lg"
                            color="gray"
                            className="placeholder:text-slate-400 p-2 text-white"
                        />
                    </div>

                    {/* Sign Up Button */}
                    <Button color="gray" fullWidth size="lg" className="mt-4 p-2">
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
