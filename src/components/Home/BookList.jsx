import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Slider from "react-slick";

const BookList = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.8 } },
  };

  const zoom = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section className="bg-white dark:bg-gray-900 py-28 px-14 dark:w-full mx-auto"
      whileInView="visible" 
      initial="hidden"      
      variants={stagger}    
    >
      <div className="flex flex-col justify-between md:flex-row items-start gap-10">
        {/* Carousel Section */}
        <motion.div 
          variants={zoom}
          className="pt-10 w-full md:w-[30%] relative"
          whileInView="visible" 
          initial="hidden"
        >
          <Slider {...sliderSettings} className="pt-10">
           
          
            <div className="relative">
              <img
                src="reader.svg"
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

        {/* Book List Section */}
        <motion.div 
          variants={fade}
          className="w-full md:w-[60%] space-y-8"
          whileInView="visible" 
          initial="hidden"
        >
          <h1 className="text-start text-3xl text-[#F5951E] pb-2 dark:text-white">
            Your Book List at a Place
          </h1>

          {/* Book Items */}
          <div className="flex items-start gap-4">
            <img
              src="/book-2.svg"
              alt="The Forest"
              className="w-25 h-30 rounded object-cover cursor-pointer"
            />
            <div>
              <h2 className="text-xl font-bold text-[#232323] dark:text-white">
                The Forest
              </h2>
              <p className="text-[#A8A8A8] dark:text-gray-400">Karen Perry</p>
              <p className="text-gray-600 mt-2 dark:text-gray-300">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="/book-3.svg"
              alt="Allan Green"
              className="w-25 h-30 rounded object-cover cursor-pointer"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Allan Green
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Karen Perry
              </p>
              <p className="text-gray-600 mt-2 dark:text-gray-300">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 ">
            <img
              src="/book-4.svg"
              alt="A Doctor in the House"
              className="w-25 h-30 rounded object-cover cursor-pointer "
            />
            <div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                A Doctor in the House
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Karen Perry
              </p>
              <p className="text-gray-600 mt-2 dark:text-gray-300">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BookList;
