import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const fetchBooks = async (query) => {
  const url = `https://openlibrary.org/search.json?q=${query}&limit=12`;
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=12`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data.docs.map((book) => ({
    title: book.title,
    description: book.description,
    id: book.key,
    authors: Array.isArray(book.author_name)
      ? book.author_name.map((author) => (typeof author === 'object' ? author.name || "Unknown Author" : author))
      : ["Unknown Author"],
    image: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "https://via.placeholder.com/150?text=No+Image",
  }));
}  

const BookData = () => {
  const navigate = useNavigate();

  const zoom = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.8 } },
  };

  const query = "Programming";
  const [showBooks, setShowBooks] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: books = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["books", query],
    queryFn: () => fetchBooks(query),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  console.log(books);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredBooks);

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={stagger}
      className="w-[90%] mx-auto py-8 dark:bg-gray-900 dark:w-full"
    >
      <motion.div
        variants={zoom}
        whileInView="visible"
        initial="hidden"
        className="w-[96%] mx-auto flex justify-between"
      >
        {!showBooks ? (
          <button
            onClick={() => setShowBooks(true)}
            className="mb-6 p-4 border border-grey-300  text-[#01AFEE] rounded-lg dark:bg-gray-900 dark:text-white dark:border  dark:border-white"
          >
            See All The Books
          </button>
        ) : (
          <button
            onClick={() => setShowBooks(false)}
            className="mb-6 p-4 border border-grey-300  text-[#01AFEE] rounded-lg dark:bg-gray-900 dark:text-white dark:border dark:border-white"
          >
            Hide All The Books
          </button>
        )}

        <div>
          <input
            type="text"
            placeholder="Search Book...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-4 border border-grey-300 shadow-sm focus:outline-none  rounded-lg"
          />
        </div>
      </motion.div>

      {showBooks && isLoading ? (
        <div className="h-[50vh] flex justify-center items-center">
          <p className="dark:text-white">Loading data.... 
          </p>
        </div>
      ) : (
        showBooks && (
          <motion.div
            variants={fade}
            whileInView="visible"
            initial="hidden"
            className="grid grid-cols-4 gap-6   mx-5"
          >
            {filteredBooks.map((book, index) => (
              <div
                onClick={() =>
                  navigate(`/products/${encodeURIComponent(book.id)}`)
                }
                className="border cursor-pointer rounded-lg shadow-md dark:border-none  dark:shadow-lg p-4 flex flex-col items-center text-center"
                key={index}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-32 h-48 object-cover mb-4"
                />
                <h3 className="font-bold text-lg mb-2 dark:text-gray-300">
                  {book.title}
                </h3>
                <p className="text-gray-600 dark:text-white">
                  By {book.authors.join(", ")}
                </p>
              </div>
            ))}
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default BookData;
