import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick';

export default function Categslider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
      };

    const [categ ,setcateg] =useState([]);

    async function getcateg(){

    let {data} = await axios.get (' https://ecommerce.routemisr.com/api/v1/categories')
        setcateg(data.data)
    }

    useEffect(()=>{
        getcateg()
    },[]);

  return (
    <>
     <div className='container mb-5'>
        <h2> All categery</h2>

        <Slider {...settings}>

            {categ.map(cat=> <div className='item'>
                <img src={cat.image} alt='photo' height={200} className='w-100'/>
                <h5>{cat.name}</h5>
            </div>)}
        
        </Slider>

     </div>
    
    </>
  )
}
