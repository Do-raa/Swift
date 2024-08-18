import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">

                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </div>

                {/* Our Products Section */}
                <div className="flex flex-col space-y-2">
                    <h6 className="font-bold text-lg">Our products</h6>
                    <a href="#" className="text-gray-400 hover:text-white">Sixt+ Car subscription</a>
                    <a href="#" className="text-gray-400 hover:text-white">Car rental</a>
                    <a href="#" className="text-gray-400 hover:text-white">Van rental</a>
                    <a href="#" className="text-gray-400 hover:text-white">Our agencies</a>
                    <a href="#" className="text-gray-400 hover:text-white">Private driver / VTC</a>
                    <a href="#" className="text-gray-400 hover:text-white">Electric scooter & bike</a>
                    <a href="#" className="text-gray-400 hover:text-white">LLD / Leasing without deposit</a>
                    <a href="#" className="text-gray-400 hover:text-white">SIXT program status</a>
                    <a href="#" className="text-gray-400 hover:text-white">SIXT application</a>
                </div>

                {/* SIXT for Businesses Section */}
                <div className="flex flex-col space-y-2">
                    <h6 className="font-bold text-lg">SIXT for Businesses</h6>
                    <a href="#" className="text-gray-400 hover:text-white">Register my company</a>
                    <a href="#" className="text-gray-400 hover:text-white">Mobility for businesses</a>
                    <a href="#" className="text-gray-400 hover:text-white">Company car alternatives</a>
                    <a href="#" className="text-gray-400 hover:text-white">Truck + van rental</a>
                    <a href="#" className="text-gray-400 hover:text-white">Electric cars for businesses</a>
                    <a href="#" className="text-gray-400 hover:text-white">Travel agencies</a>
                    <a href="#" className="text-gray-400 hover:text-white">Help and others</a>
                </div>

                {/* Help & Contact Section */}
                <div className="flex flex-col space-y-2">
                    <h6 className="font-bold text-lg">Help & Contact</h6>
                    <a href="#" className="text-gray-400 hover:text-white">Rental information</a>
                    <a href="#" className="text-gray-400 hover:text-white">SIXT Group</a>
                    <a href="#" className="text-gray-400 hover:text-white">Recruitment</a>
                    <a href="#" className="text-gray-400 hover:text-white">Regine Sixt Children's Aid Foundation</a>
                </div>
            </div>
        </footer>
    );
}
