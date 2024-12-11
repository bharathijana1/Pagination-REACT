import { useState } from 'react'

// import './App.css'
import Pagination from './Components/Pagination'
import ImgSlideShow from './Components/ImgSlideShow'
import CardSlider from './Components/CardSlider'
import ImgSlide from './Components/ImgSlide'
import ImgSlideIcon from './Components/ImgSlideIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-blue-900 text-white text-center p-2 uppercase font-medium'>pagination</h1>
    <h1 className='text-xl p-3 text-center font-medium capitalize'>Next and previous button with page of 1 of 4</h1>
       <Pagination />
       <h1 className='text-xl p-3 text-center font-medium capitalize'>image slider next and previous buttons are inside the image and inside dot navition usind <span className='text-red-600'>react slick </span></h1>
      <ImgSlideShow />
      <h1 className='text-xl p-3 text-center font-medium capitalize'>card slider usind <span className='text-red-600'>react slick </span></h1>
      <CardSlider />
      <h1 className='text-xl p-3 text-center font-medium capitalize'>image slider next and previous buttons are outside the image and  outside dot navition usind <span className='text-red-600'>react slick </span></h1>
      <ImgSlide />
      <h1 className='text-xl p-3 text-center font-medium capitalize'>image slider next and previous buttons are inside the image and inside dot navition</h1>
      <ImgSlideIcon />
    </>
  )
}

export default App
