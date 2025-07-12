import React from "react";
import clothing from '../assets/clothing.jpg'

const categories = [
  {
    name: "Clothing",
    image: clothing,
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  },
  {
    name: "Winterwear",
    image: "https://images.unsplash.com/photo-1593032465174-5cd4c057f0f7",
  },
  {
    name: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1578897369112-71b7da0da3f3",
  },
  {
    name: "Formal Wear",
    image: "https://images.unsplash.com/photo-1615631694622-e7b69b1e2d0a",
  },
];

const ItemCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition hover:scale-105 cursor-pointer"
            >
              <img
                src={`${cat.image}?w=400&h=300&fit=crop`}
                alt={cat.name}
                className="h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemCategories;
