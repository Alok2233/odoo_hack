import React from "react";
import { Upload, Search, Repeat } from "lucide-react";

const steps = [
  {
    title: "List Your Items",
    step: "Step 1",
    desc: "Easily upload photos and descriptions of items you no longer need.",
    icon: <Upload className="h-8 w-8 text-white" />,
    bg: "bg-green-500"
  },
  {
    title: "Find Your Swap",
    step: "Step 2",
    desc: "Browse thousands of unique items from other users in your community.",
    icon: <Search className="h-8 w-8 text-white" />,
    bg: "bg-blue-500"
  },
  {
    title: "Exchange & Enjoy",
    step: "Step 3",
    desc: "Arrange a convenient swap and give your items a new life.",
    icon: <Repeat className="h-8 w-8 text-white" />,
    bg: "bg-purple-500"
  }
];

const Works = () => {
  return (
    <section className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">How ReWear Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map(({ title, step, desc, icon, bg }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${bg} mb-4`}>
              {icon}
            </div>
            <h3 className="text-green-600 font-semibold">{step}</h3>
            <h4 className="text-xl font-bold text-gray-800 mt-1">{title}</h4>
            <p className="text-gray-600 mt-3">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
