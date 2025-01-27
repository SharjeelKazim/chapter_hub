import React from "react";
import { motion } from "framer-motion";
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

  const fade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.8 } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900 py-10 px-4 md:px-14 mx-auto"
      whileInView="visible"
      initial="hidden"
      variants={stagger}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Carousel Section */}
        <motion.div
          variants={fade}
          className="w-full md:w-[30%] relative pt-32"
        >
          <Slider {...sliderSettings}>
            <div>
              <img
                src="reader.svg"
                alt="Book 1"
                className="w-full h-[300px] md:h-[400px] object-contain mx-auto"
              />
            </div>
            <div>
              <img
                src="book-3.svg"
                alt="Book 2"
                className="w-full h-[300px] md:h-[400px] object-contain mx-auto"
              />
            </div>
          </Slider>
        </motion.div>

        {/* Book List Section */}
        <motion.div
          variants={fade}
          className="w-full md:w-[60%] space-y-8"
        >
          <h1 className="text-2xl md:text-3xl text-[#F5951E] font-bold pb-4 text-center md:text-left">
            Your Book List at a Place
          </h1>

          {[
            {
              img: "/book-2.svg",
              title: "The Forest",
              author: "Karen Perry",
              description:
                "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt.",
            },
            {
              img: "/book-3.svg",
              title: "Allan Green",
              author: "Karen Perry",
              description:
                "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt.",
            },
            {
              img: "/book-4.svg",
              title: "A Doctor in the House",
              author: "Karen Perry",
              description:
                "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt.",
            },
          ].map((book, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-4 pb-4 text-center   md:text-left"
            >
              <img
                src={book.img}
                alt={book.title}
                className="w-[125px] h-[200px] object-cover rounded md:w-[150px] md:h-[200px]"
              />
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold text-[#232323] dark:text-white">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {book.author}
                </p>
                <p className="text-sm text-gray-600 mt-2 dark:text-gray-300">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BookList;
