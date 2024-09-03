import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faCar, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
    return (
        <div className="bg-slate-100 flex flex-col md:flex-row justify-around items-center px-6 md:px-14 py-8">
            <div className="flex flex-col text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start my-3">
                    <FontAwesomeIcon icon={faGlobe} className="h-6 w-6 text-gray-800 mr-3" />
                    <h6 className="font-semibold text-lg md:text-xl pt-2">Global reach</h6>
                </div>
                <h1 className="font-bold text-xl md:text-2xl">
                    More than 2,000 SWIFT stations <br className="hidden md:block" /> in over 105 countries
                </h1>
            </div>

            <div className="flex flex-col text-center md:text-left mt-8 md:mt-0">
                <div className="flex items-center justify-center md:justify-start my-3">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="h-6 w-6 text-gray-800 mr-3" />
                    <h6 className="font-semibold text-lg md:text-xl pt-2">Exceptional service</h6>
                </div>
                <h1 className="font-bold text-xl md:text-2xl">
                    Stress-free, reliable, transparent and <br className="hidden md:block" /> no hidden costs
                </h1>
            </div>

            <div className="flex flex-col text-center md:text-left mt-8 md:mt-0">
                <div className="flex items-center justify-center md:justify-start my-3">
                    <FontAwesomeIcon icon={faCar} className="h-6 w-6 text-gray-800 mr-3" />
                    <h6 className="font-semibold text-lg md:text-xl pt-2">Unique fleet</h6>
                </div>
                <h1 className="font-bold text-xl md:text-2xl">
                    From premium convertibles to premium <br className="hidden md:block" /> SUVs
                </h1>
            </div>
        </div>
    );
}
