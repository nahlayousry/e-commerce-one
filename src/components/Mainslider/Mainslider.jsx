import React from 'react'
import Slider from "react-slick";
import img1 from '../../Assets/images/slider-image-1.jpeg'
import img2 from '../../Assets/images/slider-image-2.jpeg'
import img3 from '../../Assets/images/slider-image-3.jpeg'

export default function Mainslider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    
    <>
    <div className='container my-5 '>
        <div className="row">
            <div className="col-md-8">
            <Slider {...settings}> 

            <img src={img1} alt='photo'/>
            <img src={img2} alt='photo'/>
            <img src={img3} alt='photo'/>
       
            </Slider>
            </div>
            <div className="col-md-4">
                <img src={img1} className='w-100' alt='photo'/>
                <img src={img2} className='w-100' alt='photo'/>
            </div>
        </div>
    </div>
    </>
  )
}
