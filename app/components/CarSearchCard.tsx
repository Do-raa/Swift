import React from 'react';

const CarSearchCard: React.FC = () => {
    return (
        <div className="w-full max-w-md md:max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">
                    TAP TO FIND YOUR CAR
                </h2>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="w-full md:w-1/5">
                            <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
                                Departure
                            </label>
                            <input
                                type="text"
                                id="departure"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter departure location"
                            />
                        </div>
                        <div className="w-full md:w-1/5">
                            <label htmlFor="return" className="block text-sm font-medium text-gray-700">
                                Return
                            </label>
                            <input
                                type="text"
                                id="return"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter return location"
                            />
                        </div>
                        <div className="w-full md:w-1/5">
                            <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700">
                                Departure date
                            </label>
                            <input
                                type="date"
                                id="departure-date"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="w-full md:w-1/5">
                            <label htmlFor="return-date" className="block text-sm font-medium text-gray-700">
                                Return date
                            </label>
                            <input
                                type="date"
                                id="return-date"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="w-full md:w-1/5 mt-4 md:mt-0">
                            <button className="w-full bg-gray-800 text-white py-2 px-3 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarSearchCard;
