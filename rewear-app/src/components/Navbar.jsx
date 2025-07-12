
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo + Nav Links */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="ReWear" className="h-8 w-8" />
        <Link to="/" className="text-xl font-bold text-green-700">ReWear</Link>
        
        <Link to="/dashboard" className="ml-4 text-gray-700 hover:text-green-700">Dashboard</Link>
      </div>

      {/* Search Bar */}
      <div className="relative w-2/5 hidden sm:block">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-3">
        <Link to="/login" className="text-sm text-gray-700 hover:text-green-700">Login</Link>
        <Link to="/register" className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-500 text-sm">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
