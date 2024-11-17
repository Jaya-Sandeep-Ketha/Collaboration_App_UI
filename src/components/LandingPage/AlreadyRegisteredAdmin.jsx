import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';

function AlreadyRegisteredAdmin({notYetRegisteredAdmin}) {
    return (
        <div className="w-full flex items-center justify-start mr-10 ml-20 mb-20">
            {/* Outer Container */}
            <div className="relative flex flex-col rounded-xl border border-gray-300 md:px-8 md:py-10 px-6 py-8 w-full max-w-3xl">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="text-center !text-2xl lg:text-3xl mb-4 text-white"
                >
                    Admin Login
                </Typography>
                <form className="mt-4 flex flex-col gap-4 w-full">
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

                    {/* Login Button */}
                    <Button color="gray" fullWidth size="lg" className="mt-4 p-2">
                        Login
                    </Button>
                    <Button color="gray" fullWidth size="lg" className="mt-4 p-2"
                    onClick={notYetRegisteredAdmin}>
                        Not yet registered ? Register
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default AlreadyRegisteredAdmin;
