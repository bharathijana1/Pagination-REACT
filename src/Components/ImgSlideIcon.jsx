import React, { useState } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

// npm i react-icons

const ImgSlideIcon = () => {

    let slides = [
        {
        img: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        alt:"img1"
        },
        {
        img: "https://wallpapercave.com/wp/wp3386769.jpg",
        alt:"img2"
        },
        {
        img: "https://wallpaperaccess.com/full/809523.jpg",
        alt:"img3"
        },
        {
        img: "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
        alt:"img4"
        },

      ];

      let [current, setCurrent] = useState(0);
        let previousSlide = () => {
            if (current === 0) setCurrent(slides.length - 1);
            else setCurrent(current - 1);
        };
        let nextSlide = () => {
            if (current === slides.length - 1) setCurrent(0);
            else setCurrent(current + 1);
        };

  return (
    <div className="overflow-hidden relative h-screen ">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => {
          return <img src={slide.img} alt={slide.alt} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
        <GrLinkPrevious />
        </button>
        <button onClick={nextSlide}>
        <GrLinkNext />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  )
}

export default ImgSlideIcon
