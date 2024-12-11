import React, { useState } from "react";

const images = [
  { src: "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&w=600",
     alt: "Image 1" 
  },
  { src: "https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 2" 
  },
  { src: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 3" 
  },
  { src: "https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Image 4" 
  },
  { src: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 5" 
  },
  { src: "https://images.pexels.com/photos/133081/pexels-photo-133081.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 6" 
  },
  { src: "https://images.pexels.com/photos/1480347/pexels-photo-1480347.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 7" 
  },
  { src: "https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 8" 
  },
  { src: "https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 9" 
  },
  { src: "https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&w=600", 
    alt: "Image 10" 
  },
];

const Pagination = () => {
  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto p-4 w-3/4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((image, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[350px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-900 hover:bg-purple-950 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-purple-900 hover:bg-purple-950 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
