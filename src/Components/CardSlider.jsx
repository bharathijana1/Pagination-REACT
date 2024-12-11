import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"

// npm install react-slick --save  ===> react slick
// npm install slick-carousel --save  ===> react slick
const CardSlider = () => {
    const data = [
        {
            name: "bharathi",
            img:"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
            tittle:"img1"
        },
        {
            name: "bharathi",
            img:"https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
            tittle:"img2"
        },
        {
            name: "bharathi",
            img:"https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
            tittle:"img3"
        },
        {
            name: "bharathi",
            img:"https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
            tittle:"img4"
        },
        {
            name: "bharathi",
            img:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
            tittle:"img5"
        },
        {
            name: "bharathi",
            img:"https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
            tittle:"img6"
        },
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='bg-violet-300 h-screen flex justify-center items-center'>
        <div className='w-3/4 mx-auto'>
        <div className=' '>
        <Slider {...settings}>
            {data.map((i,index)=> ( 
                <div className='bg-white text-black rounded-xl h-auto md:h-[450px] '>
                    <div className='h-30 md:h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                        <img src={i.img} alt={i.tittle}  className='h-44 w-44 rounded-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                        <p className='text-xl font-semibold'>{i.name}</p>
                        <p>{i.tittle}</p>
                        <button className='bg-indigo-600 text-lg px-6 py-1 rounded-xl text-white'>Read More</button>
                    </div>
                </div>     
            ))}
            </Slider>

        </div>
        
      
    </div>

    </div>
    
  )
}

export default CardSlider
