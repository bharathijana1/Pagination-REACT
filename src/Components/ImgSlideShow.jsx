import React, { useState, useEffect } from "react";

// Carousel component
const ImgSlideShow = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Caption for Slide 1",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Caption for Slide 2",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Caption for Slide 3",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Caption for Slide 4",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Caption for Slide 5",
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Caption for Slide 4",
      },
      {
        id: 5,
        image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Caption for Slide 5",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto sliding functionality
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000); // 3 seconds for each slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto m-10">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Slide images */}
          {slides.map((slide) => (
            <div key={slide.id} className="flex-none w-full">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl bg-black bg-opacity-50 p-2 rounded-lg">
                {slide.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next & Previous buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
      >
        ❮
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
      >
        ❯
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white ${
              index === currentIndex ? "bg-opacity-70" : "bg-opacity-50"
            } transition-all`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImgSlideShow;
