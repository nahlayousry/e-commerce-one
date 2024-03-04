import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'



export const cartContext =createContext()

export default function CartProvider({children}) {

    const [numitem,setitem]=useState(0)
    const [totalprice,settotal]=useState(0)
    const [products,setproducts]=useState(null)
    const [cartid,setcartid]=useState("")

    useEffect(()=>{
        getuserCart()
    },[])

   async function addcart(id){
    try{
        const {data}=  await axios.post('https://ecommerce.routemisr.com/api/v1/cart',
        {
            "productId":id
        },
        {
            headers:{
                token:localStorage.getItem('userToken')
            }
        });

        if(data.status=="success"){
            getuserCart()
        }
        return data
    }catch(error){
        console.log(error)
    }
      
    }

   async function getuserCart(){
        try {
            const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/cart",
            {
                headers:{token:localStorage.getItem('userToken')}
            });

            if(data.status=="success"){
                setitem(data.numOfCartItems)
                setproducts(data.data.products)
                setcartid(data.data._id)
                settotal(data.data.totalCartPrice)
            }
            console.log(data)
            return data
        } catch (error) {
            
        }
    }

   async function deletproduct(id){

        try {
            const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                headers:{token:localStorage.getItem('userToken')}
            });

            if(data.status=="success"){
                setitem(data.numOfCartItems)
                setproducts(data.data.products)
                settotal(data.data.totalCartPrice)
            }
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
        
    }

    async function updateCount(id ,count){ 
        try {
            const {data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                count:count
            },
             {
                headers:{token:localStorage.getItem('userToken')}
            }
            );

            if(data.status=="success"){
                setitem(data.numOfCartItems)
                setproducts(data.data.products)
                settotal(data.data.totalCartPrice)
            }
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
        

        // /api/v1/cart/6408e98e6406cd15828e8f30
    }

    async function clearItem(){
        try {
            const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
             {
                headers:{token:localStorage.getItem('userToken')}
            }
            );

            if(data.message=="success"){
                setitem(0)
                setproducts([])
                settotal(0)
            }
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
  return <cartContext.Provider value={{clearItem,addcart,numitem,totalprice,products,
  deletproduct,updateCount,cartid,setproducts,setitem,settotal}}>
{children}
  </cartContext.Provider>
     
  
}
