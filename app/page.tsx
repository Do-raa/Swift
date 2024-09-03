"use client"

import Navbar from "@/app/componentss/Navbar"
import CarSearchCard from "@/app/componentss/CarSearchCard"
import Features from "@/app/componentss/Features"
import Carousel from "@/app/componentss/Carousel"
import Footer from "@/app/componentss/Footer" 



export default function Home() {
  return (
    <main className="flex flex-col h-full w-full">
      <Navbar />
        {/* Background Image Section */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/orange_car.jpg')" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <CarSearchCard />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 py-12 md:py-32 text-center">
          <h1 className="font-bold text-2xl md:text-5xl">RENT LUXURIOUS CARS AT AN ATTRACTIVE PRICE.</h1>
          <h6 className="font-semibold text-lg md:text-xl mt-2 md:mt-5">Premium car rental at the best price!</h6>
        </div>

        <div className="bg-slate-100 py-8">
          <Features />
        </div>

        {/* Carousel Section */}
        <div>
          <Carousel />
        </div>

        {/* Footer Section */}
        <div className="bg-gray-800 py-8">
          <Footer />
        </div>
    </main>
  );
}
