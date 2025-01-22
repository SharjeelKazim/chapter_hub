import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-2 w-[90%] dark:w-full mx-auto">
      {/* Sticky Section (Sticks throughout the page) */}
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 bg-white dark:bg-gray-900 px-6"
      >
        <div className="flex  space-x-3">
          <img src="/book.svg" alt="Books Icon" className=" w-8 h-8" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Books
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Links Section */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:justify-between md:items-center px-6 py-4`}
      >
        {/* Navigation Links */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="/"
              className="text-[#606060] hover:text-[#01AFEE] text-lg font-poppins dark:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#606060] hover:text-[#01AFEE] text-lg font-poppins dark:text-gray-300"
            >
              Book Club
            </Link>
            <Link
              to="/menu"
              className="text-[#606060] hover:text-[#01AFEE] text-lg font-poppins dark:text-gray-300"
            >
              Book Repo
            </Link>
            <Link
              to="/OurBlogs"
              className="text-[#606060] hover:text-[#01AFEE] text-lg font-poppins dark:text-gray-300"
            >
              Book List
            </Link>
          </div>
        </motion.div>

        {/* User Info */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4 mt-4 md:mt-0"
        >
          <img
            src="/consumer.svg"
            alt="User Icon"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold font-poppins text-[#01AFEE] dark:text-[#01AFEE]">
              Welcome
              <span className="text-[#F5951E] font-semibold"> Back</span>
            </h1>
            <p className="text-black text-base font-thin dark:text-gray-300">
              Sharjeel Kazim
            </p>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
