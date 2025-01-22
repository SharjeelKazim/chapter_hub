import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-2 w-[90%] mx-auto">
      <div className="flex items-center justify-center py-4 border-b border-gray-200">
        <img src="/book.svg" alt="Books Icon" className="w-8 h-8" />
        <h1 className="text-3xl font-bold text-gray-800 ml-3">Books</h1>
      </div>

      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-[#606060] hover:text-[#01AFEE] font-poppins "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#606060] hover:text-[#01AFEE] font-poppins"
          >
            Book Club
          </Link>
          <Link
            to="/menu"
            className="text-[#606060] hover:text-[#01AFEE] font-poppins"
          >
            Book Repo
          </Link>
          <Link
            to="/OurBlogs"
            className="text-[#606060] hover:text-[#01AFEE] font-poppins"
          >
            Book List
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/consumer.svg"
            alt="User Icon"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-lg font-semibold font-poppins text-[#01AFEE]">
            Welcome
            <span className="text-[#F5951E] font-semibold">Back</span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
