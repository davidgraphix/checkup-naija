"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import appleImage from "@/public/assets/apple.png";

const tips = [
   {
    icon: "🍏",
    title: "Eat Smart, Live Better",
    text: "Fill half your plate with fruits and vegetables to support digestion and overall health.",
  },
  {
    icon: "💧",
    title: "Hydrate to Feel Great",
    text: "Drink 6–8 glasses of clean water daily to stay energized and prevent dehydration.",
  },
  {
    icon: "🚶",
    title: "Move Every Day",
    text: "A brisk 30-minute walk daily improves heart health and boosts your mood.",
  },
  {
    icon: "🌙",
    title: "Rest is Medicine",
    text: "Aim for 7–8 hours of sleep each night to improve focus and strengthen immunity.",
  },
  {
    icon: "✋",
    title: "Clean Hands, Healthy Life",
    text: "Wash your hands with soap for at least 20 seconds to prevent infections.",
  },
  {
    icon: "🦟",
    title: "Prevent Malaria",
    text: "Sleep under insecticide-treated mosquito nets and keep your surroundings clean.",
  },
  {
    icon: "🥗",
    title: "Balance Your Meals",
    text: "Include proteins, carbohydrates, healthy fats, and vegetables in your daily meals.",
  },
  {
    icon: "🧂",
    title: "Reduce Salt Intake",
    text: "Too much salt can raise blood pressure. Use salt moderately when cooking.",
  },
  {
    icon: "🥤",
    title: "Limit Sugary Drinks",
    text: "Reduce soda and sugary drinks to lower your risk of diabetes and weight gain.",
  },
  {
    icon: "🪥",
    title: "Oral Health Matters",
    text: "Brush your teeth twice daily and replace your toothbrush every 3 months.",
  },
  {
    icon: "🩺",
    title: "Check Your Health Regularly",
    text: "Routine health checkups help detect problems early, even when you feel fine.",
  },
  {
    icon: "☀️",
    title: "Get Fresh Air and Sunlight",
    text: "Spend some time outdoors daily to improve mood and support vitamin D levels.",
  },
  {
    icon: "🧠",
    title: "Protect Your Mental Health",
    text: "Take breaks, talk to someone you trust, and avoid excessive stress when possible.",
  },
  {
    icon: "🚭",
    title: "Avoid Smoking",
    text: "Smoking damages the lungs and heart. Avoid it and stay away from second-hand smoke.",
  },
  {
    icon: "🍺",
    title: "Limit Alcohol Intake",
    text: "Excessive alcohol harms the liver and brain. Drink moderately or avoid it entirely.",
  },
];

export default function Tips() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === tips.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === tips.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? tips.length - 1 : prev - 1));

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8 lg:mb-12">
          <Image
            src={appleImage}
            alt="Apple icon"
            className="w-14 sm:w-16 lg:w-20 object-contain"
          />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
            Simple Tips for a Healthier You
          </h2>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="bg-gray-300 rounded-2xl p-6 shadow-xl text-center">
            <p className="text-3xl mb-3">{tips[currentIndex].icon}</p>
            <h4 className="font-semibold text-gray-900 mb-2">
              {tips[currentIndex].title}
            </h4>
            <p className="text-sm text-black leading-relaxed">
              {tips[currentIndex].text}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex gap-2">
              {tips.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentIndex ? "bg-green-600" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-10 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {[...tips, ...tips.slice(0, 2)].map((tip, i) => (
                <div
                  key={i}
                  className="bg-gray-300 h-36 rounded-2xl rounded-tl-none p-6 shadow-lg w-64 flex-shrink-0 flex flex-col items-center justify-center text-center"
                >
                  <p className="text-2xl mb-1">{tip.icon}</p>
                  <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                  <p className="text-sm text-black">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(tips.length - 2)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
