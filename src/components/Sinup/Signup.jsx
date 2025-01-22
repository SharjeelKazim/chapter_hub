import React from "react";

function SignUp() {
  return (
    <section className="w-full relative flex">
      <div className="w-full md:w-[50%]">
        <img src="bg.png" className="w-full h-[100vh] bg-cover" alt="Background" />
      </div>

      <div className="w-full  md:w-[50%] px-4 md:px-10 ">
      <div className="flex items-center justify-center py-4 ">
        <img src="/book.svg" alt="Books Icon" className="w-8 h-8" />
        <h1 className="text-3xl font-bold text-gray-800 ml-3 ">Books</h1>
      </div>

        <p className="font-poppins  text-2xl font-medium text-center">
          Welcome to Book
        </p>

        <div className="border shadow-md rounded-lg p-6 mt-10 w-full md:w-[60%] mx-auto">
          <p className="text-lg font-poppins font-medium text-center">
            Account Login
          </p>

          <div className="pt-4">
            <h1 className="text-sm font-medium text-start" >Email</h1>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="p-3 w-full border rounded-lg focus:outline-none"
            />
          </div>

          <div className="pt-4">
            <h1 className="text-sm font-medium text-start">Password</h1>
            <input
              type="password"
              placeholder="******"
              className="p-3 w-full border rounded-lg focus:outline-none"
            />
          </div>

          <p className="cursor-pointer font-poppins text-sm text-[#F5951E] text-end pt-2">
            Forgot Password?
          </p>

          <div className="pt-6 w-full">
            <button className="p-3 w-full rounded-lg bg-[#01AFEE] text-white">
              Login
            </button>
          </div>

          <p className="pt-8 text-center">
            Don’t have an account?
            <span className="text-[#F5951E] cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
