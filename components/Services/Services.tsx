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
import { motion } from "framer-motion";

const services = [
  {
    title: "Book a Medical Checkup",
    description:
      "Skip long queues and schedule appointments with trusted healthcare providers quickly and efficiently.",
    icon: CalendarCheck,
    features: [
      "General Health Checkups",
      "Specialist Appointments",
      "Laboratory Test Scheduling",
      "Preventive Health Screenings",
    ],
    button: "Book Appointment",
    link: "/book",
  },
  {
    title: "Find Verified Hospitals & Clinics",
    description:
      "Locate reliable healthcare facilities across Nigeria with verified reviews and accurate information.",
    icon: Hospital,
    features: [
      "Verified Hospitals & Clinics",
      "Location Based Search",
      "Compare Ratings",
      "Direct Contact Access",
    ],
    button: "Find a Clinic",
    link: "/clinics",
  },
  {
    title: "Doctor Consultation",
    description:
      "Speak with licensed doctors remotely through secure video consultations and digital care services.",
    icon: Video,
    features: [
      "Video Consultations",
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
      "Track your health progress and stay proactive with reminders, medication alerts, and vital monitoring.",
    icon: Bell,
    features: [
      "Medication Alerts",
      "Track Health Vitals",
      "Appointment Reminders",
      "Personalized Health Tips",
    ],
    button: "Start Tracking",
    link: "/monitoring",
  },
  {
    title: "Health Education & Awareness",
    description:
      "Stay informed with reliable medical knowledge, prevention tips, and curated wellness resources.",
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

        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            Our Services
          </h2>

          <p className="text-2xl text-black font-medium mb-6">
            Quality Healthcare. Simplified for Nigerians.
          </p>

          <p className="text-lg text-black max-w-3xl mx-auto">
            At CheckupNaija, we connect patients with trusted healthcare providers,
            digital consultations, and essential medical services — all in one
            reliable platform designed for convenience and accessibility.
          </p>
        </div>

    

{/* Service Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <div
        key={index}
        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
        flex flex-col"
      >
        {/* Icon */}
        <div className="w-18 h-18 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 ml-27">
          <Icon className="w-10 h-10 text-emerald-600" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2  flex items-center justify-center">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-3">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            What you get
          </p>

          <ul className="space-y-3 -mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start text-gray-700 ">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extra Info Section */}
        <div className="bg-gray-50 rounded-xl p-4 mb-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            Designed to make healthcare access easier and faster across
            Nigeria. 
          </p>
        </div>

        {/* CTA */}
        <Link
          href={service.link}
          className="mt-auto inline-flex items-center justify-center
          bg-emerald-600 text-white font-semibold
          px-6 py-3 rounded-lg
          hover:bg-emerald-700 transition"
        >
          {service.button}
        </Link>
      </div>
    );
  })}
</div>

        {/* How the Platform Works */}
       <div className="mt-20">
  <div className="text-center mb-10">
    <h3 className="text-4xl font-bold text-black mb-4">
      How CheckupNaija Works
    </h3>

    <p className="text-lg text-black/80 max-w-2xl mx-auto">
      Our platform makes accessing healthcare simple and efficient.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10">

    {/* LEFT CARD */}
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        1. Search Healthcare Providers
      </h4>
      <p className="text-gray-600">
        Discover verified hospitals, clinics, and licensed doctors
        across Nigeria using intelligent search filters.
      </p>
    </motion.div>

    {/* MIDDLE CARD */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        2. Book or Consult Instantly
      </h4>
      <p className="text-gray-600">
        Schedule appointments, request medical tests, or consult doctors
        through secure digital consultations.
      </p>
    </motion.div>

    {/* RIGHT CARD */}
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        3. Manage Your Health
      </h4>
      <p className="text-gray-600">
        Monitor your health records, receive reminders, and access
        trusted health resources in one place.
      </p>
    </motion.div>

  </div>
</div>



        {/* Why Choose Us */}
       <div className="mt-20">
  <div className="text-center mb-14">
    <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
      Why Choose CheckupNaija?
    </h3>

    <p className="text-lg text-black/80 max-w-2xl mx-auto">
      We combine technology, trust, and simplicity to deliver a
      healthcare experience designed specifically for Nigerians.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Card 1 */}
    <motion.div
     initial={{ y: -80, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.2,
        delay: 0.4,
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        Trusted & Verified Providers
      </h4>
      <p className="text-gray-600">
        Every doctor and hospital is carefully verified to ensure
        safety and credibility.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
       initial={{ y: -80, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.4,
        delay: 0.6,
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        Seamless Booking
      </h4>
      <p className="text-gray-600">
        Easily schedule appointments without long queues or delays.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ y: -80, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6,
        delay: 0.8,
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        Affordable Healthcare
      </h4>
      <p className="text-gray-600">
        Transparent services designed to make quality healthcare
        financially accessible.
      </p>
    </motion.div>

    {/* Card 4 */}
    <motion.div
      initial={{ y: -80, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8,
        delay: 1,
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white/90 rounded-2xl p-8 shadow-lg"
    >
      <CheckCircle className="w-10 h-10 text-emerald-600 mb-6" />
      <h4 className="text-xl font-bold text-gray-900 mb-3">
        Built for Nigerians
      </h4>
      <p className="text-gray-600">
        Designed around the realities of healthcare access in Nigeria.
      </p>
    </motion.div>

  </div>
</div>

        {/* Final CTA */}
        <div className="mt-32 text-center bg-emerald-600 rounded-2xl p-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Take Control of Your Health Today
          </h3>

          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who trust CheckupNaija for reliable,
            accessible, and convenient healthcare services.
          </p>

          <Link
            href="/get-started"
            className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;