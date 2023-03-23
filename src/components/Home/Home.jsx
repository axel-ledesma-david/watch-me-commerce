import React, {useEffect} from 'react'
import "../Home/Home.css"
import Aos from 'aos'


const Home = () => {
  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div className='d-flex justify-content-center align-items-center cover-home flex-column'>
        <h1  className='text-light' data-aos="flip-left" >Welcome to Watch Me</h1>
        <p className='text-light' data-aos="flip-right" >The best watch shop with the best prices</p>
    </div>
  )
}

export default Home