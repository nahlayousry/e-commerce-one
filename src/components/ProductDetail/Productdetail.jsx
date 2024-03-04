import axios from 'axios';
import { useContext } from 'react';
// import React, {  useState } from 'react'
import { CirclesWithBar } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { cartContext } from '../../Context/Cart';
import { toast } from 'react-hot-toast';
import { favouContext } from '../../Context/Favourite';

export default function Productdetail() {
  let {addcart}=useContext(cartContext)
    const {id}=useParams();

    let {addFav} =useContext(favouContext);
    


    async function addproducrFav(id){
      let res=await addFav(id);
      console.log(res)

      if(res.status =="success"){
        toast.success(res.message,{
          duration:2000,
          position:"top-right",
          
        })
      }
    }
    
   function getidDetils(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   
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


 const {data,isError,isLoading,isFetching}= useQuery('details',getidDetils)

 if(isFetching){
  return <div className='vh-100 d-flex justify-content-center align-items-center'>
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
 const detils = data.data.data

  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-3'>
          <img className='w-100' src={detils.imageCover} alt='cover'/>
        </div>
        <div className='col-md-9'>
          <div className='pb-5'>
            <h2>{detils.title}</h2> 
             <p>{detils.description}</p>
              
          </div>
          <div className='d-flex justify-content-between'>
            <p>{detils.price}<span>EGP</span></p>
            <p><i className='fa-solid fa-star rating-color'></i>{detils.ratingsAverage} </p>
            
          </div>
          <i onClick={()=>{
            addproducrFav(detils.id)
          }} className="fa-solid fa-heart"></i>
          <button onClick={()=>{addTocart(detils.id)}} className='btn bg-main text-white w-100'>add to cart </button>
           
         </div>
      </div>
    </div>
    
  )
}
