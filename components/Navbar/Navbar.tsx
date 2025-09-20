import React from 'react'
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      
       <header className="w-full flex justify-center pt-6">
      <div className="bg-white shadow-md rounded-full px-8 py-3 flex items-center justify-between w-[90%] max-w-6xl">
        
        <div className="flex items-center space-x-2">
         
          <span className="text-gray-800 font-semibold text-lg">CheckupNaija</span>
        </div>

        <nav className="flex space-x-8 font-medium text-black">
          <Link href="/home">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="/signup"
            className="bg-green-800 text-white px-4 py-2 rounded-xl font-medium hover:bg-white hover:border border-gray-400 hover:text-black transition"
          >
            Sign-up
          </Link>
          <Link
            href="/login"
            className="border border-gray-400 px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-green-800 hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>


    </div>
  )
}

export default Navbar