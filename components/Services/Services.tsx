"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Hospital,
  Video,
  Bell,
  BookOpen,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Book a Medical Checkup",
    description:
      "Skip long queues and schedule appointments with trusted healthcare providers.",
    icon: CalendarCheck,
    features: [
      "General Checkups",
      "Specialist Appointments",
      "Laboratory Tests",
      "Preventive Screening",
    ],
    button: "Book Appointment",
    link: "/book",
  },
  {
    title: "Find Verified Hospitals & Clinics",
    description:
      "Search and connect with trusted healthcare facilities near you.",
    icon: Hospital,
    features: [
      "Trusted Facilities",
      "Filter by Location",
      "Compare Ratings",
      "Direct Contact Access",
    ],
    button: "Find a Clinic",
    link: "/clinics",
  },
  {
    title: "Online Doctor Consultation",
    description:
      "Consult licensed doctors from anywhere through secure video calls.",
    icon: Video,
    features: [
      "Prescription Guidance",
      "Follow-Up Consultations",
      "Affordable Telemedicine",
    ],
    button: "Consult Now",
    link: "/consult",
  },
  {
    title: "Health Monitoring & Reminders",
    description:
      "Stay proactive with medication alerts and appointment tracking.",
    icon: Bell,
    features: [
      "Medication Alerts",
      "Track Vitals",
      "Appointment Reminders",
      "Personalized Health Tips",
    ],
    button: "Start Tracking",
    link: "/monitoring",
  },
  {
    title: "Health Education & Awareness",
    description:
      "Access reliable medical resources and preventive health guides.",
    icon: BookOpen,
    features: [
      "Disease Prevention Tips",
      "Symptom Checker",
      "Public Health Updates",
      "Wellness Guides",
    ],
    button: "Explore Resources",
    link: "/resources",
  },
];

const Services = () => {
  return (
    <section
      className="py-24 bg-gradient-to-br from-green-600 via-gray-400/20 via-[65%] to-blue-500
                 bg-[length:250%_250%] animate-[diagonal-flow_10s_linear_infinite]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-2xl text-black max-w-4xl mx-auto fw500 mb-6">
            Quality Healthcare. Simplified for Nigerians.
          </p>
          <p className="text-lg text-black max-w-2xl mx-auto">
            {" "}
            We connect you to reliable medical support, verified professionals,
            and essential health services — all in one place.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg
                           hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href={service.link}
                  className="mt-auto inline-block text-center bg-emerald-600 text-white
                             px-6 py-3 rounded-xl font-semibold
                             hover:bg-emerald-700 transition"
                >
                  {service.button}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose CheckupNaija?
            </h3>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              We combine technology, trust, and simplicity to deliver a
              healthcare experience built specifically for Nigerians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Trusted & Verified Providers
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Every hospital and doctor on our platform is carefully verified
                to ensure safety, credibility, and professional standards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Seamless Booking System
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Schedule appointments in minutes with an intuitive interface
                designed for speed, clarity, and convenience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Affordable & Transparent
              </h4>
              <p className="text-gray-600 leading-relaxed">
                No hidden charges. Clear pricing and accessible services that
                make quality healthcare financially realistic.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Built for Nigerians
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Designed around local healthcare realities, infrastructure, and
                the real needs of patients across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
