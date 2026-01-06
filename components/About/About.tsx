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
      <br /><br /> <br /> <br /><br /> <br />
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

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Core Values</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Trust & Transparency */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Trust & Transparency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We put patients first and maintain the highest standards of honesty and integrity in every
                    interaction.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Harnessing technology to create simple, effective solutions that transform healthcare access in
                    Nigeria.
                  </p>
                </div>
              </div>

              {/* Compassion */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <Hands className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Delivering quality care that empathizes with the real challenges Nigerians face in accessing
                    healthcare.
                  </p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Making quality healthcare available to everyone, regardless of location or economic status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Transforming Healthcare in Nigeria
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Be part of the movement that's making quality healthcare accessible to everyone.
            </p>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
