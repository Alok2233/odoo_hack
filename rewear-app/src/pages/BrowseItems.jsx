import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1602810311533-2db79f011e51",
    category: "Clothing",
    size: "M",
    condition: "Gently Used",
  },
  {
    id: 2,
    title: "Leather Handbag",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262b90",
    category: "Accessories",
    size: "Free Size",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Winter Coat",
    image: "https://images.unsplash.com/photo-1583742571590-16e6d5359b69",
    category: "Winterwear",
    size: "L",
    condition: "Used",
  },
  // Add more items here
];

const BrowseItems = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Browse All Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">Category: {item.category}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Condition: {item.condition}</p>
                <button className="mt-2 px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseItems;
