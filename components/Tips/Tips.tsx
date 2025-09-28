"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tips = [
  { icon: "🍏",
     title: "Eat Smart, Live Better", 
     text: "Fill half your plate with fruits & veggies — your body will thank you." },
  { icon: "💧",
     title: "Hydrate to Feel Great",
     text: "Drink 6–8 glasses of water daily to stay energized and refreshed." },
  { icon: "🚶",
     title: "Move Every Day",
     text: "A brisk 30-minute walk boosts your heart health and mood." },
  { icon: "🌙",
     title: "Rest is Medicine",
     text: "Sleep 7–8 hours each night for sharper focus and stronger immunity." },
  { icon: "✋",
     title: "Clean Hands, Healthy Life",
     text: "Wash hands often with soap — 20 seconds can stop infections." },
];

export default function Tips() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === tips.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === tips.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? tips.length - 1 : prev - 1));

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center -mt-45 lg:mb-12 ">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Simple Tips for a Healthier You
          </h2>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="bg-gray-300 rounded-2xl  p-4 fill white shadow-xl">
            <p className="text-3xl mb-2 text-center">{tips[currentIndex].icon}</p>
            <h4 className="font-semibold text-gray-900 text-center">{tips[currentIndex].title}</h4>
            <p className="text-sm text-black text-center">{tips[currentIndex].text}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button onClick={prevSlide} className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex space-x-2">
              {tips.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-red-600" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition">
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
          className="bg-gray-300 h-32 rounded-2xl rounded-tl-none p-6 shadow-lg w-64 flex-shrink-0 flex flex-col items-center justify-center text-center"
        >
          <p className="text-2xl ">{tip.icon}</p>
          <h4 className="font-semibold text-gray-900">{tip.title}</h4>
          <p className="text-sm text-black">{tip.text}</p>
        </div>
      ))}
    </div>
  </div>


          {/* Nav Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(tips.length - 2)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-green-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
