'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function ManageBooking() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
            {/* Logo and Back Button */} 
            <div className="absolute top-24">
                <Link href="/" passHref>
                    <span className="flex items-center text-gray-600 hover:text-gray-800 text-xl font-semibold">
                        <FontAwesomeIcon icon={faCircleLeft} className="mr-2" />
                        <h6>Back</h6>
                    </span>
                </Link>
            </div>

            <div className="absolute top-10 left-10 flex items-center">
                <img src="/logo.png" alt="Logo" className="h-10 w-20 sm:h-12 sm:w-24 lg:h-14 lg:w-28" />
            </div>

            {/* Form */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Manage your reservation</h2>

                <p className="text-sm sm:text-base font-medium mb-6 text-gray-600">Change your booking as you wish, quickly and easily.</p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="input1" className="block text-gray-700 text-sm font-bold mb-2">
                            Reservation number
                        </label>
                        <input
                            id="input1"
                            type="number"
                            placeholder="Enter your reservation number"
                            className="w-full px-4 py-2 sm:py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="input2" className="block text-gray-700 text-sm font-bold mb-2">
                            Email address
                        </label>
                        <input
                            id="input2"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 sm:py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <Link href="/new-url" passHref>
                        <button
                            type="button"
                            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            NEXT
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
