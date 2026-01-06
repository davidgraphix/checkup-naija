import React from "react";
import { Globe, Eye, Heart, Lightbulb, Hand as Hands, CheckCircle } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";


const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-600 via-gray-400/20 via-[65%] to-blue-500
                bg-[length:250%_250%] animate-[diagonal-flow_10s_linear_infinite]"
    >
      <Navbar />
       {/* Hero Section with Who We Are */}
      <main className="flex-1">
        <section className="bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Who We Are</h1>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    CheckupNaija is a digital health platform that connects patients with trusted healthcare providers
                    across Nigeria.
                  </p>

                  <p>
                    We make it easier to find doctors, book appointments, access lab services, and receive reliable
                    health advice—all in one convenient place.
                  </p>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                <img
                  src="/doctor-holding-smartphone.jpg"
                  alt="Female doctor with smartphone"
                  className="w-full max-w-md mx-auto"
                />

                {/* Floating Medical Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center animate-float">
                    <Globe className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="absolute top-32 right-16 w-12 h-12 bg-teal-100 rounded-full animate-float-delayed"></div>
                  <div className="absolute bottom-32 left-16 w-10 h-10 bg-green-100 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Our Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                Our mission is to make healthcare affordable, accessible, and efficient by leveraging technology to
                bridge the gap between patients and healthcare providers.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Eye className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                Our vision is to become Nigeria's leading digital health platform, empowering millions of people to take
                charge of their health with confidence, convenience, and trust.
              </p>
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
