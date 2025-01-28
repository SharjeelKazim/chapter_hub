import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function Product() {
  const { id } = useParams();

  const fetchBookDetails = async (id) => {
    const response = await fetch(
      `https://openlibrary.org${decodeURIComponent(id)}.json`
    );
    if (!response.ok) {
      throw new Error(`Error fetching book details! Status: ${response.status}`);
    }
    const data = await response.json();
    const img = data.covers?.[0]
      ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
      : "https://via.placeholder.com/150?text=No+Image";

    return { ...data, img };
  };

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBookDetails(id),
    enabled: !!id,
  });

  if (isLoading) return <p className="flex justify-center items-center"><AiOutlineLoading3Quarters  className="animate-spin"/>
</p>;
  if (isError) return <p>Error loading book details!</p>;

  return (
    <div className="w-[90%] mx-auto py-8">
      {book && (
        <div className="lg:flex flex-col items-center text-center">

          <h1 className="font-bold text-4xl mb-6">{book.title}</h1>
          <div className="lg:flex flex-row items-start justify-center w-full">
 
            <div className="lg:w-1/3 flex justify-center p-4">
              <img
                src={book.img}
                alt={book.title}
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>

  
            <div className="lg:w-2/3 text-start p-4">

              {book.description && (
                <p className="mb-6">
                  <span className="text-xl font-bold">Description:</span>{" "}
                  {typeof book.description === "string"
                    ? book.description
                    : book.description?.value || "No description available."}
                </p>
              )}

              {/* {book.first_publish_date && (
                <p>Date{book.first_publish_date}</p>
              )} */}


              {book.authors && (
                <p className="mb-4">
                  <span className="text-xl font-bold">Authors:</span>{" "}
                  {book.authors.map((author) => author.name).join(", ")}
                </p>
              )}

  
              {book.first_publish_date && (
                <p className="mb-4">
                  <span className="text-xl font-bold">First Published:</span>{" "}
                  {book.first_publish_date}
                </p>
              )}

              {book.subjects && (
                <p className="mb-4">
                  <span className="text-xl font-bold">Subjects:</span>{" "}
                  {book.subjects.join(", ")}
                </p>
              )}

   
              {book.subject_places && (
                <p className="mb-4">
                  <span className="text-xl font-bold">Subject Places:</span>{" "}
                  {book.subject_places.join(", ")}
                </p>
              )}

       
              {book.subject_times && (
                <p className="mb-4">
                  <span className="text-xl font-bold">Subject Times:</span>{" "}
                  {book.subject_times.join(", ")}
                </p>
              )}  

        
              {book.links && book.links.length > 0 && (
                <div className="mb-4">
                  <span className="text-xl font-bold">Links:</span>
                  <ul className="list-disc ml-6">
                    {book.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {link.title || link.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

          
              {book.latest_revision && (
                <p className="mb-4">
                  <span className="text-xl font-bold">Latest Revision:</span>{" "}
                  {book.latest_revision}
                </p>
              )}

           
              {book.last_modified?.value && (
                <p>
                  <span className="text-xl font-bold">Last Modified:</span>{" "}
                  {new Date(book.last_modified.value).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
