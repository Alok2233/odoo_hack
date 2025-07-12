import React from "react";
import { useParams } from "react-router-dom";


const mockItem = {
  id: "1",
  title: "Vintage Leather Handbag",
  points: 350,
  category: "Accessories",
  type: "Handbag",
  size: "Medium",
  condition: "Like New",
  description:
    "A beautifully preserved vintage leather handbag, perfect for everyday use or as a stylish accent piece. Features multiple compartments and a durable strap. Shows minor signs of wear consistent with age, but overall in excellent condition. Great for someone who appreciates classic accessories and sustainable fashion. This item has been cleaned and conditioned to maintain its quality.",
  tags: ["vintage", "leather", "handbag", "fashion", "accessories", "classic"],
  uploader: {
    name: "Jane Doe",
    location: "San Francisco, CA",
    memberSince: "May 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  images: [
    "/images/handbag1.jpg",
    "/images/handbag2.jpg",
    "/images/handbag3.jpg",
    "/images/handbag4.jpg",
  ],
};

const suggestions = [
  {
    title: "Leather Boots",
    image: "/images/boots.jpg",
  },
  {
    title: "Canvas Backpack",
    image: "/images/backpack.jpg",
  },
  {
    title: "Denim Jacket",
    image: "/images/denim.jpg",
  },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = mockItem; // Replace with real fetch logic

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image section */}
        <div>
          <img
            src={item.images[0]}
            alt={item.title}
            className="rounded-lg shadow-md object-cover w-full h-96"
          />
          <div className="flex gap-3 mt-3">
            {item.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumbnail"
                className="h-20 w-20 object-cover rounded border hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Item Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h1>
          <p className="text-lg font-semibold text-purple-600 mb-4">
            {item.points} Points
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Category: {item.category}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Type: {item.type}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Size: {item.size}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Condition: {item.condition}</span>
          </div>

          <p className="mb-4 text-gray-700 leading-relaxed">{item.description}</p>

          <div className="mb-4">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block text-xs bg-blue-100 text-blue-700 rounded-full px-3 py-1 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded">
              Swap Request
            </button>
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded">
              Redeem via Points
            </button>
          </div>

          {/* Uploader info */}
          <div className="flex items-center gap-3 p-4 border rounded-md bg-gray-50">
            <img
              src={item.uploader.avatar}
              alt={item.uploader.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{item.uploader.name}</p>
              <p className="text-sm text-gray-500">
                {item.uploader.location} <br /> Member since {item.uploader.memberSince}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">You might also like</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {suggestions.map((sug, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img
                src={sug.image}
                alt={sug.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{sug.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;