import React from 'react'
import Navbar from '../Navbar/Navbar'
import Link from "next/link"

const Hero = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-600 via-white/60 via-[72%] to-blue-700'>
        <Navbar />

        <section className=" py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black font-bold leading-tight">
            Connecting Patients <br /> to Trusted Healthcare <br /> Providers
          </h1>
          <p className="text-black text-lg">
            Book doctors, access care, and <br /> stay healthy with ease.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-green-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Get Started
          </Link>
        </div>

        
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src=""   
            alt="Doctor picture"
           
            
          />
        </div>
      </div>
    </section>

    </div>
  )
}

export default Hero