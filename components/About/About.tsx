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

        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
