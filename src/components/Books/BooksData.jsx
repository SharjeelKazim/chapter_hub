import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
    authors: book.author_name || ["Unknown Author"],
    image: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "https://via.placeholder.com/150?text=No+Image",
  }));
};

const BookData = () => {
  const query = "programming";
  const [showBooks, setShowBooks] = useState(false);

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

  return (
    <div className=" w-[90%] mx-auto py-8">
      <div className=" w-[96%] mx-auto flex justify-between">
        {!showBooks ? (
          <button
            onClick={() => setShowBooks(true)}
            className=" mb-6 p-4 bg-black text-white rounded-lg"
          >
            See All The Books
          </button>
        ) : (
          <button
            onClick={() => setShowBooks(false)}
            className=" mb-6 p-4 bg-black text-white rounded-lg"
          >
            Hide All The Books
          </button>
        )}

        <div>
          <input
            type="text"
            placeholder="Search Book...."
            className="px-2 py-4 border border-solid-black shadow-sm focus:outline-none hover:border border-black rounded-lg"
          />
        </div>
      </div>

      {showBooks &&isLoading ? (
        <div className="h-[50vh] flex justify-center items-center">
          <p>Loading data....</p>
        </div>
      ) : (
        showBooks && (
          <div className=" grid grid-cols-4 gap-6 mx-5">
            {books.map((book, index) => (
              <div
                className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center"
                key={index}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="w-32 h-48 object-cover mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <p className="text-gray-600">By {book.authors.join(", ")}</p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default BookData;
