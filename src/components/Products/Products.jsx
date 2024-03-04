import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {CirclesWithBar} from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/Cart'
import { toast } from 'react-hot-toast'
import { favouContext } from '../../Context/Favourite'

export default function Products() {

  let {addcart}= useContext(cartContext);
  const [productlist ,setproduct]=useState([]);
  let {addFav} =useContext(favouContext);
    


    async function addproducrFav(e,id){
      let res=await addFav(id);
      e.target.classList.replace('fa-regular','fa-solid')
      
      if(res.status =="success"){
        toast.success(res.message,{
          duration:2000,
          position:"top-right",
          
        })
      }
    }

  async  function getproduct(){
    let {data} = await  axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
    setproduct(data?.data)
    }

    async function addTocart(id){
    let res= await addcart(id)
    if(res.status=='success'){

      toast.success(res.message,{
        duration:2000,
        position:"top-right",
        
      })
    }
  
    }

    useEffect(()=>{
        getproduct()
    },[])

    // function searchs(e){
    //   let term = e.target.value;
    //   productlist.filter((ele)=> ele.title.toLowerCase().trim().includes(term.title.toLowerCase().trim()))
    // }

  return (
    <>
    
    <div className="container">
    <div className='w-75 mx-auto bg-light-main my-3 '>
            <input type='text' className='form-control my-3 '/>
          </div>
        <div className="row ">
          
          {productlist.length >0 ?
           
         <>
          {productlist.map(product =>
            <div className="col-md-3">
                   
               <div className='product p-5'>
               <i onClick={(e)=>{
                addproducrFav(e,product._id)
               }} className=" fa-heart fa-regular col"></i>
               <Link to={`/productDetail/${product.id}`}>
               
                <img src={product.imageCover} className='w-100'/>
                <p className='text-main'>{product.category.name}</p>
                <h6>{product.title}</h6>
                <div className='d-flex justify-content-between'>
                  <p>{product.price} EG</p>
                  <p>{product.ratingsAverage}<i className='fa-solid fa-star rating-color'></i></p>
                </div>
                 

               </Link>
               <button onClick={()=>{addTocart(product._id)}} className='btn bg-main text-light w-100'>Add to cart</button>
             </div>
             </div>
             
            )}
          
         </>
          :
           <div className='vh-100 d-flex justify-content-center align-items-center'>
            <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          /> 
           </div>
}
             
        </div>
    </div>
  
    </>
  )
}
