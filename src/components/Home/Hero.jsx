import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900 px-8 dark:w-full mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="pb-7" variants={fadeInUp}>
        <h1 className="text-center text-7xl font-bold text-[#01AFEE] dark:text-[#01AFEE]">
          Book of the{" "}
          <span className="text-[#F5951E] dark:text-white">Day</span>
        </h1>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center"
        variants={staggerContainer}
      >
        {/* Carousel Section */}
        <motion.div className="w-full md:w-[30%]" variants={zoomIn}>
          <Slider {...sliderSettings}>
            <div>
              <img
                src="book-1.svg"
                alt="Book 1"
                className="w-[450px] h-[400px]"
              />
            </div>
            <div>
              <img
                src="book-3.svg"
                alt="Book 2"
                className="w-[450px] h-[400px]"
              />
            </div>
          </Slider>
        </motion.div>

        <motion.div
          className="w-full pt-24 md:mt-0 md:pl-40"
          variants={fadeInUp}
        >
          <motion.div
            className="flex justify-end"
            variants={zoomIn}
          >
            <button className="border flex border-[#F5951E] dark:text-white dark:border-white px-4 py-2 text-[#F5951E] rounded-lg text-lg">
              <MdPlaylistAdd size={29} /> Add to list
            </button>
          </motion.div>

          <h1 className="text-[#F5951E] text-2xl font-popins dark:text-white">
            Book Description
          </h1>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed dark:text-gray-300">
            Explores the principles and techniques of designing with a
            minimalist and environmentally conscious approach. Dive into a world
            where simplicity meets sustainability, guiding you through the art
            of creating visually appealing designs while reducing environmental
            impact.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed dark:text-gray-300">
            Discover how to harness the power of flat design to convey messages
            of eco-friendliness and promote green initiatives. With practical
            examples and insightful tips, this book is your essential companion
            to crafting modern and eco-conscious graphic designs. Join the
            movement towards a greener future with "Green Flat Design."
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
