"use client";
import { Google } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";

const SignIn = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900 border'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    noValidate=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 rounded-md border-2 border-[#FF3811] focus:outline-[#FF3811]'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border-2 border-[#FF3811] rounded-md focus:outline-[#FF3811]'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='btn bg-gradient-to-r from-[#FF8938] to-[#F00] border-[#FF3811] w-full rounded-md py-3 text-white'
                        >
                            Continue
                        </button>
                    </div>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer btn'>
                        <IconButton>
                            <Google></Google>
                        </IconButton>
                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don&apos;t have an account yet?{' '}
                        <Link
                            href='/signup'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Sign up
                        </Link>
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
</form>
                </div>
                <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer btn'>
                    <IconButton>
                        <Google></Google>
                    </IconButton>
                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        href='/signup'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Sign up.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;