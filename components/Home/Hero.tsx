import React from "react";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import Tips from "../Tips/Tips";
import Image from "next/image";
import docImage from "@/public/assets/doctor.png";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-600 via-gray-400/20 via-[65%] to-blue-500
                 bg-[length:250%_250%] animate-[diagonal-flow_10s_linear_infinite]"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-15 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
          
          {/* Text */}
          <div className="text-center md:text-left max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Connecting Patients <br />
              to Trusted Healthcare <br />
              Providers
            </h1>

            <p className="text-black text-lg">
              Book doctors, access care, and <br />
              stay healthy with ease.
            </p>

            <Link
              href="/get-started"
              className="inline-block bg-green-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={docImage}
              alt="Doctor picture"
              className="w-[85%] max-w-md md:max-w-lg animate-fade-in-float"
              priority
            />
          </div>
        </div>
      </section>

      <Tips />
    </div>
  );
};

export default Hero;
