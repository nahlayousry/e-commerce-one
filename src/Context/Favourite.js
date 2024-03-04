import axios from "axios";
import { createContext, useEffect, useState } from "react";

import React from 'react'

export let favouContext =createContext()
 

export default function FavouriteProvider({children}) {

    const [products,setproducts]=useState(null) 

   async function addFav(productid){
       try {
        let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
         productId: productid
        },
        {
         headers:{
             token:localStorage.getItem('userToken')
         }
        }
        );
        return data;
       } catch (error) {
        console.log(error)
       }
    }

    async function displayproduct(){
        try {
        let {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
          headers:{
            token:localStorage.getItem('userToken')
          }
        })
        if(data.status =="success"){
          setproducts(data?.data.products)
        }
          console.log(products)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(()=>{
        displayproduct()
      },[])


  return (
     <favouContext.Provider value={{addFav,products}}>
        {children}
     </favouContext.Provider>
  )
}
