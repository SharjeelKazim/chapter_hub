import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookList = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white py-20 px-8 w-[90%] mx-auto">
      <div className=" flex flex-col justify-between md:flex-row items-start gap-10">
        {/* Carousel Section */}
        <div className=" pt-10 w-full  md:w-[30%]">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="reader.svg"
                alt="Book 1"
                className="w-[414px] h-[579px]"
              />
            </div>
            <div>
              <img
                src="reader.svg"
                alt="Book 1"
                className="w-[414px] h-[579px]"
              />
            </div>
            
          </Slider>
        </div>

        {/* Book List Section */}
        <div className="w-full md:w-[60%] space-y-8">
          <h1 className="text-start text-3xl text-[#F5951E] pb-2">
            Your Book List at a Place
          </h1>

          {/* Book Items */}
          <div className="flex items-start gap-4 ">
            <img
              src="/book-2.svg"
              alt="The Forest"
              className="w-25 h-30 rounded object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-[#232323]">The Forest</h2>
              <p className=" text-[#A8A8A8]">Karen Perry</p>
              <p className="text-gray-600 mt-2 ">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 ">
            <img
              src="/book-3.svg"
              alt="Allan Green"
              className="w-25 h-30 rounded object-cover"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-800">Allan Green</h2>
              <p className="text-sm text-gray-500">Karen Perry</p>
              <p className="text-gray-600 mt-2 ">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="/book-4.svg"
              alt="A Doctor in the House"
              className="w-25 h-30 rounded object-cover"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                A Doctor in the House
              </h2>
              <p className="text-sm text-gray-500">Karen Perry</p>
              <p className="text-gray-600 mt-2">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookList;
