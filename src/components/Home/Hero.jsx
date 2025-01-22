import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdPlaylistAdd } from "react-icons/md";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white  px-8 w-[90%] mx-auto">
      <div className="pb-7">
        <h1 className="text-center text-7xl font-bold text-[#01AFEE]">
          Book of the <span className="text-[#F5951E]">Day</span>
        </h1>
      </div>

      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Carousel Section */}

        <div className="w-full md:w-[30%]">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="book-2.svg"
                alt="Book 1"
                className="w-[450px] h-[400px] "
              />
            </div>
            <div>
              <img
                src="book-3.svg"
                alt="Book 2"
                className="w-[450px] h-[400px] "
              />
            </div>
          </Slider>
        </div>

        <div className="w-full  mt-8 md:mt-0 md:pl-40">
          <div className="flex justify-end">
            <button className="border flex  border-[#F5951E] px-4 py-2 text-[#F5951E] rounded-lg text-lg">
              {" "}
              <MdPlaylistAdd size={29} /> Add to list
            </button>
          </div>
          <h1 className="text-[#F5951E] text-2xl font-popins  ">
            Book Description
          </h1>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Explores the principles and techniques of designing with a
            minimalist and environmentally conscious approach. Dive into a world
            where simplicity meets sustainability, guiding you through the art
            of creating visually appealing designs while reducing environmental
            impact.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Discover how to harness the power of flat design to convey messages
            of eco-friendliness and promote green initiatives. With practical
            examples and insightful tips, this book is your essential companion
            to crafting modern and eco-conscious graphic designs. Join the
            movement towards a greener future with "Green Flat Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
