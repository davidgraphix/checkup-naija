import React from "react";

const tips = [
  {
    icon: "🍏",
    title: "Eat Smart, Live Better",
    text: "Fill half your plate with fruits & veggies — your body will thank you.",
  },
  {
    icon: "💧",
    title: "Hydrate to Feel Great",
    text: "Drink 6–8 glasses of water daily to stay energized and refreshed.",
  },
  {
    icon: "🚶",
    title: "Move Every Day",
    text: "A brisk 30-minute walk boosts your heart health and mood.",
  },
  {
    icon: "🌙",
    title: "Rest is Medicine",
    text: "Sleep 7–8 hours each night for sharper focus and stronger immunity.",
  },
  {
    icon: "✋",
    title: "Clean Hands, Healthy Life",
    text: "Wash hands often with soap — 20 seconds can stop infections.",
  },
];

const Tips = () => {
  return (
    <section className="w-full mt-0 pb-4"> 
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 -mt-6 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-black ">
          <span className="italic">Simple Tips for a Healthier You</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white shadow-xl/30   rounded-xl p-1 flex flex-col items-start space-y-2 hover:shadow-lg transition"
            >
              <span className="text-2xl">{tip.icon}</span>
              <h3 className="font-semibold text-gray-800">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
