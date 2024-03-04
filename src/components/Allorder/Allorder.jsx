import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode'
import { CirclesWithBar } from 'react-loader-spinner';


export default function Allorder() {
    
    const userid= jwtDecode(localStorage.getItem('userToken')).id;
    const [allData, setallData] = useState(null)
    async function getAlloreder(){
        try {
            let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userid}`)
        
            setallData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAlloreder()
    },[]);
    

  return (<>
    <div className='container py-5'>
        <div className='row g-3'>
             <>
             {allData? allData.map(order =>

            <div className='col-md-6'>
            <div className="inner bg-light py-3 p-4">

                <p>phone : {order.shippingAddress.phone}</p>
                <p>phone : {order.shippingAddress.city}</p>

                <div className='row'>
                    {order.cartItems.map(item=> <div className='col-md-4'>
                        <div>
                            <img src={item.product.imageCover} className='w-100'/>
                            <h6>{item.product.title.split(" ").slice(0,2).join(" ")}</h6>
                        </div>
                    </div>)}
                    
                </div>
            </div>

                 
            </div>
             ) : <div className='vh-100 d-flex justify-content-center align-items-center'>
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
            </div>}
             
             </>
            
        </div>

    </div>
    </>) 
}
