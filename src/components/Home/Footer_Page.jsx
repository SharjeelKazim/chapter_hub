import React from "react";

const Footer_Page = ({ isDarkMode, setIsDarkMode }) => {
  // Toggle dark mode state on button click
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <footer className="w-full py-6 bg-white dark:bg-gray-900 text-center">
      {/* Only one button, working to toggle the mode */}
      <button
        onClick={handleToggle}
        className="px-4 py-2 border rounded-lg text-[#01AFEE] dark:text-white"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </footer>
  );
};

export default Footer_Page;
