import React from "react";

const Login = () => {
  return (
    <section className="w-full  relative flex  ">
      <div className="w-full md:w-[50%] mx-auto">
        <img src="bg.png" className="w-full h-[100vh] bg-cover" alt="Background" />
      </div>

      <div className="w-full  md:w-[50%] px-4 md:px-10 ">
      <div className="flex items-center justify-center py-4 ">
        <img src="/book.svg" alt="Books Icon" className="w-8 h-8" />
        <h1 className="text-3xl font-bold text-gray-800 ml-3">Books</h1>
      </div>

        <div className="border shadow-md rounded-lg p-6 mt-4 w-[80%] mx-auto">
          <p className="text-lg font-poppins font-medium text-center">
            Create Account
          </p>
          <p className="text-sm font-poppins text-[#818181] font-medium text-center">
            Please create your profile
          </p>

          <div className="w-full ">
            <form className=" flex flex-col">
              <div className="flex gap-16 pt-6">
                <div>
                  <h1>
                    FirstName <span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <h1>
                    LastName <span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="flex gap-16 pt-2">
                <div>
                  <h1>
                    MobileNumber<span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="telephone"
                    placeholder="+95128796565"
                    className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <h1>Email</h1>
                  <input
                    type="text"
                    placeholder="email@gmail.com"
                    className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="flex gap-16 pt-2">
                <div>
                  <h1>
                    Date of Birthday<span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="date"
                    className="w-[140px] border rounded-sm p-2 focus:outline-none"
                  />
                </div>

                <div className="pl-12">
                  <h1>
                    Gender <span className="text-red-600">*</span>
                  </h1>
                  <div className="flex gap-4 pt-2">
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
              
              <div className="pt-2">
            <h1 className="text-base font-poppins font-medium">Password <span className="text-red-600">*</span></h1>
            <input
              type="password"
              placeholder="******"
              className="p-3 w-full border rounded-lg focus:outline-none"
            />
          </div>

          <div className="pt-6 w-full">
            <button className="p-3 w-full rounded-lg bg-[#01AFEE] text-white">
              Login
            </button>
          </div>
          <p className=" text-center">
            Don’t have an account?
            <span className="text-[#F5951E] cursor-pointer">Register</span>
          </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
