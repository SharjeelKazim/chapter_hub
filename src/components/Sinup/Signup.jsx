import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="w-full flex items-center justify-center min-h-screen px-4 lg:px-0">
      <div className="hidden md:block w-[50%]">
        <img
          src="bg.png"
          className="w-full h-[100vh] object-cover"
          alt="Background"
        />
      </div>

      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="border shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img src="/book.svg" alt="Books Icon" className="w-8 h-8" />
            <h1 className="text-3xl font-bold text-gray-800 ml-3">Books</h1>
          </div>

          <p className="text-2xl font-medium text-center mb-4">Welcome to Book</p>

          <div className="space-y-4">
            <div>
              <h1 className="text-sm font-medium">Email</h1>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="p-3 w-full border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <h1 className="text-sm font-medium">Password</h1>
              <input
                type="password"
                placeholder="******"
                className="p-3 w-full border rounded-lg focus:outline-none"
              />
            </div>
          </div>

          <p className="cursor-pointer text-sm text-[#F5951E] text-right mt-2">
            Forgot Password?
          </p>

          
          <Link to={"/home"}>
<div className="mt-6">
            <button className="p-3 w-full rounded-lg bg-[#01AFEE] text-white">
              Login
            </button>
          </div> </Link>


          <p className="pt-8 text-center text-sm">
            Don’t have an account?{" "}
            <span className="text-[#F5951E] cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
