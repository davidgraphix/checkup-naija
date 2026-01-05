"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/public/assets/checkup-naija.png";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
  ];

  return (
    <header className="w-full flex justify-center pt-4 fixed top-0 left-0 z-50">
      <div className="bg-white shadow-md rounded-full px-3 py-0.5 flex items-center justify-between w-[90%] max-w-6xl h-[64px] relative">
        {/* Logo */}
        <div className="flex items-center relative -mt-2 ">
          <Image
            src={Logo}
            alt="Checkup Naija Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex space-x-6 font-medium text-black text-sm lg:text-base">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative pb-1 ${
                pathname === href
                  ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-800"
                  : "hover:text-green-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <Link
            href="/signup"
            className="px-3 py-1 rounded-lg font-medium text-sm 
                       bg-green-800 text-white 
                       border border-transparent 
                       hover:bg-white hover:text-black hover:border-gray-400 
                       transition drop-shadow-md"
          >
            Sign-up
          </Link>

          <Link
            href="/login"
            className="px-3 py-1 rounded-lg font-medium text-sm 
                       text-gray-700 border border-gray-400 
                       hover:bg-green-800 hover:text-white hover:border-transparent 
                       transition drop-shadow-md"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-green-800"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-white shadow-lg rounded-2xl py-4 flex flex-col items-center space-y-4 lg:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-medium ${
                  pathname === href ? "text-green-800" : "text-black"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="w-[90%] text-center px-4 py-2 rounded-lg bg-green-800 text-white font-medium"
            >
              Sign-up
            </Link>

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="w-[90%] text-center px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-medium"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
