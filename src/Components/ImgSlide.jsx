import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"

// npm install react-slick --save  ===> react slick
// npm install slick-carousel --save  ===> react slick
// import "slick-carousel/slick/slick.css";  ===> import
// import "slick-carousel/slick/slick-theme.css";   ===> import
// import Slider from "react-slick";   ===> import

const ImgSlide = () => {
    const dataItems = [
        {
            img: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "img1",
        },
        {
            img: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "img2",
        },
        {
            img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "img3",
        },
        {
            img: "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "img4",
        },
        {
            img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "img5",
        },
        {
            img: "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "img6",
        }
    ];


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      };


  return (
    <div className='h-screen bg-red-200 mx-auto flex justify-center items-center '>
        <div className='w-3/4'>
        <Slider {...settings}>
        {dataItems.map((item, index) => (
            <div>
                <img src={item.img} alt={item.alt}  className='w-full h-[700px] '/>
            </div>
        ))}
        </Slider>

        </div>
        

      
    </div>
  )
}

export default ImgSlide
