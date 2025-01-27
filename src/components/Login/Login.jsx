import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen p-4 lg:p-0">
      {/* Left Section: Image (Hidden on Mobile) */}
      <div className="hidden md:block w-[50%]">
        <img
          src="bg.png"
          className="w-full h-[100vh] object-cover"
          alt="Background"
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="border shadow-md rounded-lg p-6 w-full max-w-lg mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center justify-center py-4">
            <img src="/book.svg" alt="Books Icon" className="w-8 h-8" />
            <h1 className="text-3xl font-bold text-gray-800 ml-3">Books</h1>
          </div>

          <div className="text-center mb-6">
            <p className="text-lg font-poppins font-medium">Create Account</p>
            <p className="text-sm font-poppins text-[#818181] font-medium">
              Please create your profile
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Mobile and Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+95128796565"
                  className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Date of Birth and Gender */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm">
                  Date of Birthday <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm">
                  Gender <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="w-4 h-4"
                    />
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="w-4 h-4"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

<Link to={"home"}>
            <button className="w-full p-3 rounded-lg bg-[#01AFEE] text-white mt-6">
              Login
            </button>
            </Link>
          </form>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <span className="text-[#F5951E] cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
