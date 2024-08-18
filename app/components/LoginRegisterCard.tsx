import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const LoginRegisterCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 p-6 z-20">
            <h2 className="text-2xl font-bold text-center my-4">Create an account or log in</h2>

            {/* Google Sign-In Button */}
            <button className="w-full flex items-center justify-center py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Continue with Google
            </button>

            {/* Divider */}
            <div className="my-4 flex items-center">
                <hr className="w-full border-gray-400" />
                <span className="px-2 text-gray-600">OR</span>
                <hr className="w-full border-gray-400" />
            </div>

            {/* Email Sign-In Form */}
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your email"
                    />
                </div>

                {/* <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your password"
                    />
                </div> */}

                <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none">
                    Next
                </button>
            </form>

            <div className="py-4 text-sm font-semibold">
                <Link href="/register-your-company" target="_blank"
                    rel="noopener noreferrer" className="flex flex-wrap text-orange-500 hover:text-orange-700 px-2">
                    Not yet registered for a business rate? Sign up your company here.
                </Link>
                <div className="flex justify-center space-x-4 pt-4 ">
                    <Link href="/terms-and-conditions" target="_blank"
                        rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        Terms and Conditions
                    </Link>
                    <Link href="/privacy-policy" target="_blank"
                        rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">

                        Privacy Policy
                    </Link>
                </div>
            </div>

            {/* Close Button */}
            <div
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
            </div>
        </div>
    );
};

export default LoginRegisterCard;
