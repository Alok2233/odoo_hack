import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80')" }}
    >
      {/* Foreground overlay filter */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Transparent content box */}
      <div className="relative z-10 bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Swap, Share, Sustain.</h1>
        <p className="text-gray-700 mb-6">
          Discover unique items and exchange what you no longer need with a vibrant community.
          Give your clothes a new life, sustainably.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/browse">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition shadow">
              Browse Items
            </button>
          </Link>
          <Link to="/list">
            <button className="bg-white text-green-700 border border-green-600 hover:bg-green-100 px-6 py-3 rounded-lg font-semibold transition shadow">
              List an Item
            </button>
          </Link>
      </div>
      </div>
    </section>
  );
};

export default Hero;