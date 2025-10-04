"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/checkup-naija.png";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
  ];

  return (
    <header className="w-full flex justify-center pt-4  fixed top-0 left-0 z-50 ">
      <div className="bg-white shadow-md rounded-full px-6 py-0.5 flex items-center justify-between w-[90%] max-w-6xl h-[64px] overflow-visible">
        {/* Logo */}
        <div className="flex items-center space-x-2 relative -mt-2">
          <Image
            src={Logo}
            alt="Checkup Naija Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Nav links */}
        <nav className="flex space-x-6 font-medium text-black text-sm lg:text-base">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative pb-1 ${
                pathname === href
                  ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-800"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          {/* Sign-up button */}
          <Link
            href="/signup"
            className="px-3 py-1 rounded-lg font-medium text-sm 
                       bg-green-800 text-white 
                       border border-transparent 
                       hover:bg-white hover:text-black hover:border-gray-400 
                       transition drop-shadow-md"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
          >
            Sign-up
          </Link>

          {/* Login button */}
          <Link
            href="/login"
            className="px-3 py-1 rounded-lg font-medium text-sm 
                       text-gray-700 border border-gray-400 
                       hover:bg-green-800 hover:text-white hover:border-transparent 
                       transition drop-shadow-md"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
