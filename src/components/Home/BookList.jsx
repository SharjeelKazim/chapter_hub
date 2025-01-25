import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const BookList = () => {

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
    <motion.section className="bg-white dark:bg-gray-900 py-20 px-8 dark:w-full mx-auto"
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
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            Navigation={true}
            Pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide className="relative">
              <img
                src="reader.svg"
                alt="Book 1"
                className="w-[414px] h-[579px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="Play.svg"
                  alt="Play button"
                  className="w-16 h-16 cursor-pointer"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src="reader.svg"
                alt="Book 2"
                className="w-[414px] h-[579px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="Play.svg"
                  alt="Play button"
                  className="w-16 h-16 cursor-pointer"
                />
              </div>
            </SwiperSlide>
          </Swiper>
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
